const mongoose = require("mongoose");
const connectdb = () => {
  mongoose
    .connect("mongodb://localhost:27017/japnikaDB")
    .then(() => console.log("connected to japnikaDB"))
    .catch((error) => console.log(error));
};

module.exports = connectdb;
