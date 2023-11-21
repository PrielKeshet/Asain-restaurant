const express = require("express");
const router = express.Router();
const ProductBLL = require("../BLL/ProductBLL");

router.get("/", async (req, resp) => {
  const products = await ProductBLL.GetAll();
  resp.json(products);
});
router.get("/:id", async (req, resp) => {
  const { id } = req.params;
  const product = await ProductBLL.GetById(id);
  resp.json(product);
});

module.exports = router;
