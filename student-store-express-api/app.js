const express = require("express");
const morgan = require("morgan");
const storeRouter = require("./routes/store");
const bodyParser = require("body-parser")
const { NotFoundError } = require("./utils/errors");
const cors = require("cors");
const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors())
app.use("/store",storeRouter)

app.get("/", (req, res) => {
    res.json({
        ping: "pong"
    });
    res.sendStatus(200);
})

// 404 errors that do not match any endpoints
app.use((req,res,next) => {
    return next(new NotFoundError);
})

// generic error handler -> anything unhandled
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;
    return res.status(status).json({
        error: {message,status}
    })
})

module.exports = app;