// YOUR CODE HERE
const express = require("express");
const { NotFoundError } = require("./utils/errors");
const app = express();
 const products = require("./routes/products_store")
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(express.json());
// app.use('/gift-exchange', gift)



app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});
//handle all 404 errorors
// app.use((req, res, next) => {
//   return next(new NotFoundError());
// });

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(cors(corsOptions))


app.use("/store",products)
 
//Generic erroror handle

app.use((error, req, res, next) => {
  const status = error.status || 400;
  const message = error.message;
  return res.status(status).json({
    error: { message, status },
  });
});


module.exports = app;
