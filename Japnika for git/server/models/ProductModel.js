const mongoose = require("mongoose");

const productschema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Price: { type: Number, require: true },
    Desc: { type: String, required: true },
    Img: { type: String, required: true },
    Extras: { type: [String], required: true },
    Category: { type: String, required: true },
  },
  { versionKey: false }
);

const product = mongoose.model("product", productschema);
module.exports = product;
