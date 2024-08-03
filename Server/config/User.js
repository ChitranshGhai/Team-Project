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
    description:{
        type: String,
        required: [true,"Description is required"]
    },
    image:{
        type: String,
        required: [true,"Image is required"]
    },
    additional:{
        type: String,
        required: [true,"Information required"]
    }
})

const product = mongoose.model('items',userSchema);
module.exports = product