const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, "E-mail is Mandatory"],
        unique: true
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: [true, "Password is Mandatory"]
    }
});

const Customers = mongoose.model('customers', UserSchema);
module.exports = Customers;
