const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
    type: String,
    required: [true,'A Name is required'],
    unique: false
    },
    price:{
        type: Number,
        required: [true,"A Price is required"]
    },
    detail:{
        type: String,
        required: [true,"Detail is required"]
    },
    image:{
        type: String,
        required: [true,"Image is required"]
    }
})

const product = mongoose.model('items',userSchema);
module.exports = product