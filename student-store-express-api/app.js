const cors = require("cors")
const express = require("express")
const morgan = require("morgan")

const {NotFoundError} = require("./utils/errors")
const storeRouter = require("./routes/store")

const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use("/", storeRouter)


//  responds to all GET requests w/ 200 status code
app.get('/', async (req, res, next) => {
    res.status(200).send({"ping": "pong"})
})


//  error handler
app.use((req, res, next) => {
    return next(new NotFoundError())
})


//  "unhandled errors" error handler
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    return res.status(status).json({
        error: {message, status}
    })
})


module.exports = app