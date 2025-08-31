const express = require("express");
const productModel = require("../models/ProductModel");
const router = express.Router();

function calFinalPrice(price, discount) {
  return price - (price * discount) / 100;
}

router.post("/products-add", async (req, res) => {
  try {
    const {
      productId,
      ProductName,
      productPrice,
      productDiscount,
      productstatus,
    } = req.body;
    const product = new productModel({
      productId,
      ProductName,
      productPrice,
      productDiscount,
      productFinalPrice: calFinalPrice(productPrice, productDiscount),
      productStatus: productstatus,
    });
    const productSave = await product.save();
    res.status(201).json(productSave);
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.error("Error creating product:", err.message);
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("Error fetching products:", err.message);
  }
});

module.exports = router;
