// YOUR CODE HERE
const express = require("express")
const app = express()
// const fs = require("fs") // built in module that works for filesystems - what pulls in db.json
// const path = require("path");

const cors = require("cors")
app.use(cors())
// want to install cors on the backend - use terminal
app.use(express.json())

const db = require("./data/db.json")
// console.log(db)

app.get("/", (req, res) => {
    res.status(200);
    res.send(db) 
    // can also use sendFile but would expect a link not the products themselves 
    // (just by preference we used send)
})

app.post("/", (req, res) => {
    // console.log(req.body)
    res.send("success")
})

module.exports = app
