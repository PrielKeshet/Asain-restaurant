const Extra = require("../models/ExtraModel");

const GetAll = () => {
  return Extra.find({});
};

module.exports = {
  GetAll,
};
