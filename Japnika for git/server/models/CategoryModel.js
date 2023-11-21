const mongoose = require("mongoose");

const catgoriesschema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
  },
  { versionKey: false }
);

const category = mongoose.model("catgories", catgoriesschema);
module.exports = category;
