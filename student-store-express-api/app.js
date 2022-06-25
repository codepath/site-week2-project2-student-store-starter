// YOUR CODE HERE
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require('morgan')
const data = require("./data/db.json")
const filterRouter = require("./routes/store.jsx")
//var bodyParser = require('body-parser')


app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/store", filterRouter)


app.get("/store", async (req, res, next) => {
    res.status(200).json(data)
  })

  module.exports = app
//const {storage} = require("./data/storage")

//class Store {
    //static async productList(){
        //return storage.get("products").value();
    //}
 //}


 //import data from "./data/db.json"

 //export const getitemId = (d) => [...new Set(d.map((products) => products.id))]
 
// export const createDataSet = () => {
   //return {
    // data,
    // itemId: getitemId(data),
   //}
 //}
