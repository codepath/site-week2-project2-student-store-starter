const express = require("express");
const morgan = require("morgan");
const storeRouter = require("./routes/store.js");
const { NotFoundError } = require("./utils/errors.js");

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use("/store",storeRouter);

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