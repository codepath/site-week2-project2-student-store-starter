const express = require('express')
const cors = require('cors')

const db = require('./data/db.json')
const receiptCalculation = require('./receipt')

const app = express()
// const fs = require('fs')
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.status(200)
    res.send(db)
})

app.get('/store/:id', (req,res) => {
    const {id} = req.params

    let myProduct = db.products.filter(product => product.id === parseInt(id))
    myProduct ? myProduct = myProduct[0] : res.send ("No products found.")

    res.status(200)
    res.send({"product": myProduct})


})

app.post('/checkout', (req, res) => {
    const cartItems = req.body.cartItems
    const products = db.products
    const stateTaxRates = req.body.stateTaxRates
    const selectedState = req.body.selectedState

    const taxRate = stateTaxRates[selectedState]
    

    const receipt = receiptCalculation(cartItems, products, taxRate)
    res.send(receipt)
    // update purchases in db.json (hint: FileWriteSync from 'fs' module)
})


module.exports = app