// YOUR CODE HERE
const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require("cors")
const bodyParser = require('body-parser');
const { NotFoundError } = require("./utils/errors")
const storeRouter = require("./routes/store")

app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(cors());
app.use("/",storeRouter)

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
    return next(new NotFoundError("Here?"))
  })

app.get('/', (req, res) => {
    res.status(200).send({
        "ping" : "pong"
    })
})

module.exports = app