const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "Product ID is required"],
    unique: [true, "Product ID must be unique"],
  },
  productName: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [2, "Minimum length is 2 characters"],
  },
  productPrice: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price cannot be negative"],
  },
  productDiscount: {
    type: Number,
    required: [true, "Product discount is required"],
  },
  productFinalPrice: {
    type: Number,
    required: [true, "Final price is required"],
    min: [0, "Final price cannot be negative"],
  },
  productStatus: {
    type: String,
    required: [true, "Product status is required"],
  },
});

const productModel = mongoose.model("ProductModel", productSchema);
module.exports = productModel;
