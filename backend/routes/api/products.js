const express = require("express");
const mongoose = require("mongoose");
const Product = require("../../models/Product");

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).res.json(err));
});

// get products with specific id
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({ error: err }));
});

// create product
router.post("/", (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    rating: req.body.rating,
  });

  if (
    !newProduct.name ||
    !newProduct.image ||
    !newProduct.price ||
    !newProduct.rating
  ) {
    return res.status(400).json({ error: "all fields are compulsory" });
  }

  newProduct
    .save()
    .then((item) => res.json(item))
    .catch(res.status(400).json({ error: "something went wrong" }));
});

// update product with specific id
router.put("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((item) => {
      updatedProduct = req.body;

      item.name = updatedProduct.name ? updatedProduct.name : item.name;
      item.image = updatedProduct.image ? updatedProduct.image : item.image;
      item.price = updatedProduct.price ? updatedProduct.price : item.price;
      item.rating = updatedProduct.rating ? updatedProduct.rating : item.rating;
      item.save().then((item) => res.json({ msg: "member updated" }));
    })
    .catch((err) => res.status(400).json({ msg: "Member not found." }));
});

// delete products with specific id
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ error: "Member not found." }));
});

module.exports = router;
