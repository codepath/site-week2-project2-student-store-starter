const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const storeRouter = require("./routes/store");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/", storeRouter);

module.exports = app;
