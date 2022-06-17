const express = require("express")
const morgan = require("morgan")
const storeRouter = require("./routes/store")
const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use("/store", storeRouter)

app.get("/", (req,res) => {
    res.status(200)
})

module.exports = app