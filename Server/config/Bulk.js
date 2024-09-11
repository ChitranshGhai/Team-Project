const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: String,
    organization: String,
    email1: String,
    phone: String,
    city: String,
    quantity: String,
    design: String,
    additionalRequests: String
  });

  const Bulk = mongoose.model('Bulk', orderSchema);
  module.exports = Bulk;

  