// YOUR CODE HERE

const express = require("express");
const cors = require("cors");
const app = express();
//const db = require("./data/db.json");
const storeRouter = require("./routes/store");

app.use(cors());
app.use(express.json());

//the middleware
app.use("/store", storeRouter);
// move this route into routes file
// create model that contains logic for routes

app.get("/", (req, res) => {
  res.send({ ping: "pong" });
  // res.send(db);
});

// add 404 error handler

// add generic handler

module.exports = app;
