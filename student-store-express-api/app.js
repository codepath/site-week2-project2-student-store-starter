const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = express();
const storeRouter = require("./routes/store")
const { NotFoundError } = require("./utils/errors")

app.use(morgan("tiny")); // for console logs
app.use(cors()); // for localhost frontend to make requests to localhost backend
app.use(express.json()); // converts body to json

app.use(`/store`, storeRouter);

// DEFAULT ROUTE
app.get("/", async (request, response) => {
    response.status(200).send({"ping" : "pong"})
})

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
    return next(new NotFoundError())
  })
  
  /* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message || "Something went wrong in the application"
  
    return res.status(status).json({
      error: { message, status },
    })
  });

module.exports = app;