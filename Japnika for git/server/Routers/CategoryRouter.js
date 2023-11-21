const express = require("express");
const router = express.Router();
const CategoryBLL = require("../BLL/CategoryBLL");

router.get("/", async (req, resp) => {
  const categories = await CategoryBLL.GetAll();
  resp.json(categories);
});

module.exports = router;
