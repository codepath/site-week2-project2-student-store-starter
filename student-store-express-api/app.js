const morgan = require("morgan");
const express = require("express");
const storeRouter = require("./routes/store")
const { NotFoundError } = require("./utils/errors")

app.use(morgan("tiny")); // for console logs

app.use(express.json());
app.use(`/store`, storeRouter);
app.get("/", async (request, response) => {
    response.send({"ping" : "pong"})
})

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
    return next(new NotFoundError())
  })
  
  /* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
  
    return res.status(status).json({
      error: { message, status },
    })
  });

module.exports = app;