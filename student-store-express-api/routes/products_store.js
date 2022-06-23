// const express = require("express");
// const router = express.Router();



// const Products = require("../models/products_store");
// const { BadRequestError, NotFoundError } = require("../utils/errors");

// // router.post("/", async (req, res, next) => {
// //   try {
// //     const newPost = req.body.post;
// //     if (!newPost) {
// //       return next(new BadRequestError("No post found in request"));
// //     }
// //     const post = await Products.createProduct(newPost);
// //     res.status(201).json({ post });
// //   } catch (err) {
// //     next(err);
// //   }
// // });
// router.get("/", async (req, res, next) => {
//   try {
//     // const posts = await Products.listProducts();
//     const posts = {"ping":"pong"}
//     res.status(200).json({ posts });
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/store", (req, res, next) => {
//   res.status(200).json(Products.Pulldata())
  
// })
// module.exports = router;
