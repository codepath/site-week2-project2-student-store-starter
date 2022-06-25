// YOUR CODE HERE
// const { NotFoundError } = require('./utils/errors');

const express = require('express');
const morgan = require('morgan')
const router = require("./routes/store")
const { NotFoundError } = require("./Utils/Errors")

const app = express();

app.use(morgan('tiny'))
app.use(express.json())
app.use("/store", router)

const bodyParser = require('body-parser')
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get("/", async (req, res, next) => {
    res.status(200).send({ "ping": "pong" })
})

// 404 handler middleware
app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    let status = err.status ? err.status : 500;
    let message = err.message ? err.message : "Something went wrong in the application"
    res.send({"error" : {"status" : status, "message" : message}})
})

module.exports = app 