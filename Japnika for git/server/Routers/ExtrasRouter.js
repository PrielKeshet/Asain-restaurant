const express = require("express");
const router = express.Router();
const ExtraBLL = require("../BLL/ExtraBLL");

router.get("/", async (req, resp) => {
  const extras = await ExtraBLL.GetAll();
  resp.json(extras);
});

module.exports = router;
