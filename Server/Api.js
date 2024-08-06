const express = require('express')
const app = express();
// const chalk = require('chalk');
const mongoose= require('mongoose')
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
require("dotenv").config();
require("./config/dbConn");
const user = require('./config/User');

const PORT = process.env.PORT || 1337;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User routes
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

app.post('/product', async (req, res) => {
    const { name, price, detail, image, additional, description } = req.body;
    const newUser = new user({
        name,
        price,
        detail,
        image,
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

/* app.get("/logo.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "logo.svg"));
}); */

app.post("/verification", (req, res) => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === req.headers["x-razorpay-signature"]) {
        res.status(200).json({ message: "OK" });
    } else {
        res.status(403).json({ message: "Invalid" });
    }
});

app.post("/razorpay/:productId", async (req, res) => {
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
        res.status(200).json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (err) {
        console.error(`Error creating Razorpay order: ${err}`); // Log the error for debugging
        res.status(500).json({ message: "Something went wrong" });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
