const express = require("express")
const morgan = require("morgan")
const app = express()
const bodyParser = require('body-parser')
const storeRouter = require("./routes/store")

const cors = require('cors')
app.use(cors())


app.use(express.json())
app.use(morgan("tiny"))
app.use(storeRouter)

app.use(bodyParser.json())

// health check
app.get('/', (req, res) => {
    res.status(200).json({ "ping" : "pong" })
  })



module.exports = app