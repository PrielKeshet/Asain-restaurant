const mongoose = require("mongoose");

const extraschema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Price: { type: Number, require: true },
  },
  { versionKey: false }
);

const extra = mongoose.model("extra", extraschema);
module.exports = extra;
