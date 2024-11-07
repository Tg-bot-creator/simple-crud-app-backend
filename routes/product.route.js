const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller"); // Importing from controller

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct); // Correct usage
router.delete("/products/:id", deleteProduct);

module.exports = router;
