const express = require('express');
const port = 9998;
const app = express();
require('./DbConn/Conn');
const customer = require('./DbConn/User');
const cors = require('cors');


app.use(cors());
app.use(express.json()); 

app.listen(port, (err) => {
    if (err) {
        console.log("Something Went Wrong");
    } else {
        console.log(`Server is Running on ${port}`);
    }
});

app.post('/api/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await customer.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json({ data: "Success" });
            } else {
                res.json({ data: "The Password is Incorrect" });
            }
        } else {
            res.json({ data: "No user Found" });
        }
    } catch (err) {
        console.error((err));
        res.status(500).json({ data: "An error occurred", error: err.message })
    }
});


app.post('/api/SignUp', async (req, res) => {
    const obj= req.body
    try {
        const newCustomer = new customer(obj);
        const save = await newCustomer.save();
        res.send(save)
    }
    catch (err) {
        console.log((err))
    }
})