const Order = require("../models/OrderModel");

const GetAll = () => {
  return Order.find({});
};

const AddItem = async (obj) => {
  const order = new Order(obj);
  await order.save();
  return order;
};

module.exports = {
  GetAll,
  AddItem,
};
