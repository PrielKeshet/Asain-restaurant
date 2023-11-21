const Product = require("../models/ProductModel");

const GetAll = () => {
  return Product.find({});
};

const GetById = (id) => {
  return Product.findById(id);
};

module.exports = {
  GetAll,
  GetById,
};
