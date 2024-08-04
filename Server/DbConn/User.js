const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  GoogleId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name is Required"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "E-mail is Mandatory"],
    unique: true,
  },
  password: {
    type: String,
    /* required: [true, "Password is Mandatory"] */
  },
});

const Customers = mongoose.model("customers", UserSchema);
module.exports = Customers;
