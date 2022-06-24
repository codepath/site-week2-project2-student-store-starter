const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const storeRouter = require("./routes/Store")

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use("/store", storeRouter)

app.get("/", (req, res) => {
    res.status(200).send({"ping":"pong"})
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message
    return res.status(status).json({
      error: { message, status },
    })
  })

module.exports = app
