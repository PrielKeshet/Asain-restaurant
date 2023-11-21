const mongoose = require("mongoose");

const orderschema = new mongoose.Schema(
  {
    FullPrice: { type: Number, require: true },
    Addres: { type: String, required: true },
    FullName: { type: String, required: true },
    Mail: { type: String, required: true },
    Phone: { type: String, required: true },
    Credit: { type: Object, required: false },
    Products: { type: [Object], required: true },
  },
  { versionKey: false }
);

const order = mongoose.model("order", orderschema);
module.exports = order;
