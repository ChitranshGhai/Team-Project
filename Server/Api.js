const express = require('express')
const app = express();
const multer = require('multer');
const mongoose = require('mongoose')
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
require("dotenv").config();
require("./config/dbConn");
const Order=require('./config/User2')
const user = require('./config/User');
const Orders=require('./config/User3')

const PORT = process.env.PORT || 1337;

// Middleware
app.use(cors());
app.use(bodyParser.json());


//Multer Configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// User routes

app.get('/showproducts', async (req, res) => {
    try {
        const products = await user.find();
        if (products && products.length > 0) {
            res.status(200).json({ success: true, data: products });
        } else {
            res.status(404).json({ success: false, message: "No data found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});



app.get('/', async (req, res) => {
    try {
        const getData = await user.find();
        if (getData.length > 0) {
            res.send(getData);
        } else {
            res.status(404).send("No data found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/* Product Page Api */
app.get('/getData/:id', async (req, res) => {
    try {
        const prod = await user.findById(req.params.id);
        if (!prod) {
            return res.status(404).send('Product not found');
        }
        res.json(prod);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/product',upload.single('image'), async (req, res) => {
    const { name, price, detail, additional, description } = req.body;
    const imageFile=req.file;
    const newUser = new user({
        name,
        price,
        detail,
        image:{
            data:imageFile.buffer,
            contentType:imageFile.mimmetype
        },
        additional,
        description
    });

    try {
        const saved = await newUser.save();
        res.send(saved);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/product/:_id', async (req, res) => {
    try {
        const updatedUser = await user.updateOne(
            { _id: req.params._id },
            { $set: req.body }
        );
        res.send(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/product/:_id', async (req, res) => {
    try {
        const result = await user.deleteOne({ _id: req.params._id });
        if (!result) {
            return res.status(404).send("Product not found");
        }
        res.send("Product deleted successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});




// Razorpay configuration
var razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/verification", (req, res) => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");
  
    if (digest === req.headers["x-razorpay-signature"]) {
      // Handle payment verification here
      // Access form data if needed
      console.log("Payment verification successful", req.body);
      res.status(200).json({ message: "OK" });
    } else {
      res.status(403).json({ message: "Invalid" });
    }
  });

app.post("/razorpay/single-order/:productId", async (req, res) => {
    const { productId } = req.params;

    // Check if productId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: "Invalid product ID" });
    }

    try {
        const product = await user.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const amount = product.price * 100; // convert to paisa
        const payment_capture = 1;
        const currency = "INR";
        const options = {
            amount,
            currency,
            receipt: shortid.generate(),
            payment_capture,
        };

        const response = await razorpay.orders.create(options);
        const orderData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            apartment: req.body.apartment,
            city: req.body.city,
            state: req.body.state,
            pinCode: req.body.pinCode,
            phone: req.body.phone,
            productId: productId,
            amount: response.amount,
            currency: response.currency,
            razorpayOrderId: response.id,
        };
        const order = new Order(orderData);
        await order.save();

        res.status(200).json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (err) {
        console.error(`Error creating Razorpay order: ${err}`);
        res.status(500).json({ message: "Something went wrong" });
    }
});


app.post('/update-order', async (req, res) => {
    try {
        const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
        const order = await Order.findOneAndUpdate(
            { razorpayOrderId: razorpayOrderId },
            { $set: { razorpayPaymentId, razorpaySignature, status: 'Paid' } },
            { new: true }
        );
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
        console.error(`Error updating order: ${error}`);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.post('/razorpay/create-order', async (req, res) => {
    const { cartItems, formData } = req.body;

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return res.status(400).json({ message: "No products in cart" });
    }

    try {
        let totalAmount = 0;
        let productDetails = [];

        for (let item of cartItems) {
            const { _id: productId, quantity } = item;

            if (!mongoose.Types.ObjectId.isValid(productId)) {
                return res.status(400).json({ message: `product ID not found: ${productId}` });
            }

            const product = await user.findById(productId);
            if (!product) {
                return res.status(404).json({ message: `Product not found for ID: ${productId}` });
            }

            const productTotal = product.price * quantity;
            totalAmount += productTotal;

            productDetails.push({
                productId: productId,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }

        const amountInPaise = totalAmount * 100;
        const options = {
            amount: amountInPaise,
            currency: 'INR',
            receipt: shortid.generate(),
            payment_capture: 1
        };

        const response = await razorpay.orders.create(options);

        const ordersData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            address: formData.address,
            apartment: formData.apartment,
            city: formData.city,
            state: formData.state,
            pinCode: formData.pinCode,
            phone: formData.phone,
            products: productDetails,
            amount: response.amount,
            currency: response.currency,
            razorpayOrderId: response.id
        };

        const orders = new Orders(ordersData);
        await orders.save();

        res.status(200).json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (err) {
        console.error(`Error creating Razorpay order: ${err}`);
        res.status(500).json({ message: "Something went wrong" });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
