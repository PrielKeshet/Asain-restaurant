const Category = require("../models/CategoryModel");

const GetAll = () => {
  return Category.find({});
};

module.exports = {
  GetAll,
};
