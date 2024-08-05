const express = require('express');
const chalk = require('chalk');
const port = 3388;
const app1 = express();
require("./config/dbConn");
const user = require('./config/User');
const cors = require('cors')
const bodyParser = require('body-parser');
// const findData = new user({
//     "name": 5,
//     "price":45000
// })
// findData.save().then(doc=>{
//     console.log(doc)
// })
app1.use(cors())
app1.use(bodyParser.json())
app1.get('/', async (req, res) => {
    const getData = await user.find()
    if (getData.length > 0) {
        res.send(getData)
    }
    else {
        console.log(chalk.inverse.yellow("No data found"))
    }
})
// app1.get('/getData/:id', async (req, res) => {
//     try {
//         const prod = await user.findById(req.params.id)
//         if (!prod) {
//             return res.status(404).send('Product not found')
//         }
//         res.json(prod)
//     } catch (err) {
//         res.status(401).send('Error')}}

// )

app1.get('/getData/:id', async(req,res)=>{
    try{
        const prod = await user.findById(req.params.id)
        if(!prod){
            return res.send('product not found')
        }
        res.json(prod)
    }catch(err){
        res.send(err.message)

    }
})
app1.post('/product', async (req, res) => {
    const { name, price, detail, image, additional, description } = req.body;
    const newUser = new user({
        "name": name,
        "price": price,
        "detail": detail,
        "image": image,
        "additional": additional,
        "description":description
    })
    try {
        const saved = await newUser.save()
        res.send(saved)
        // const { _id } = req.body
        // if(!_id || !mongoose.Types.ObjectId.isValid(_id)){
        //     return res.status(400).send('Invalid product ID')
        // }
        // const pro = await product.findById(_id)
        // if(!pro){
        //     return res.status(404).send('Product not found')
        // }
        // res.json(product)
    }
    catch (err) {
        console.log(chalk.inverse.red(err))
    }
})

app1.put('/product/:_id',async(req,res)=>{

    let use = await user.updateOne(
        { _id: req.params._id },
        { $set: req.body }
    )
    res.send(use)
})
app1.delete('/product/:_id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await user.deleteOne({ _id: id })
        if (!result) {
            return res.send("Product not Found")
        }
        return res.send("Product deleted successfully")
    }
    catch (err) {
        res.send({ err: `Error found` })
    }
})
app1.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red("Something went wrong!"))
    }
    else {
        console.log(chalk.inverse.cyan(`server is running on ${port}`))
    }
})
