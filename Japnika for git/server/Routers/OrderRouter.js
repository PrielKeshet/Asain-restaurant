const express = require("express");
const router = express.Router();
const OrderBLL = require("../BLL/OrderBLL");

router.get("/", async (req, resp) => {
  const orders = await OrderBLL.GetAll();
  resp.json(orders);
});

router.post("/", async (req, resp) => {
  const obj = req.body;
  const result = await OrderBLL.AddItem(obj);
  resp.status(201).json(result);
});

module.exports = router;
