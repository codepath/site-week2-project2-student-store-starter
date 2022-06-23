// YOUR CODE HERE

const express = require('express')
const log = require('morgan')
const cors = require("cors")
//const { NotFoundError } = require("./utils/errors")
const storeRouter = require("./routes/store")



const app = express();
app.use(log('tiny'))
app.use(express.json())
app.use(cors())
app.use("/", storeRouter)

// var bodyParser = require('body-parser');
// app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', (req, res) => {

  res.status(200).send({ "ping": "pong" })
})
//Generic error
app.use((error, req, res, next) => {
  const status = error.status || 500
  const message = error.message

  return res.status(status).json({
    error: { message, status },
  })
})

module.exports = app;