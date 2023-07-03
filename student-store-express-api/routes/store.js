
const express = require('express')
const Storage = require('../data/storage')
const storeRouter = express.Router()

storeRouter.get('/', (request, response) => {
    try {
        response.json(Storage.getProducts())
    } catch (error) {
        response.status(404).json({ error: 'No products found.'})
    }
})

storeRouter.get('/:id', (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const product = Storage.getProductById(id)
        if (product) {
            response.json(product)
        } else {
            response.status(404).json({ error: 'Product not found.'})
        }
    } catch (error) {
        response.status(404).json({ error: 'Product not found.'})
    }
})

module.exports = storeRouter