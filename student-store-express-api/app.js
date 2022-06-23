const express = require("express")
const morgan = require("morgan")
const storeRouter = require("./routes/store")
const cors = require("cors")
const app = express()


const corsOptions = {
    optionsSuccessStatus: 200, // For legacy browser support
    credentials: true, // This is important.
    origin: "http://localhost:3001/store",
};
app.use(cors(corsOptions))

app.use(morgan("tiny"))
app.use(express.json())


app.use("/store", storeRouter)

app.get("/", (req,res) => {
    res.status(200).json({"ping":"pong"})
})

module.exports = app