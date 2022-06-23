const express = require("express")
const morgan = require("morgan")
const storeRouter = require("./routes/store")
const orderRouter = require("./routes/purchase")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(morgan("tiny"))
app.use(express.json())


app.use("/store", storeRouter)
app.use("/orders", orderRouter)

app.get("/", (req,res) => {
    res.status(200).json({"ping":"pong"})
})

module.exports = app