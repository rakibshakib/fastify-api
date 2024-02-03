const itemList = require("../data").itemsArray;

const getAllItems = (req, reply) => {
  reply.send(itemList);
};
const getSingleItemById = (req, reply) => {
  reply.send(itemList.find((pro) => pro.id === req.params.id) || {});
};

module.exports = {
  getAllItems,
  getSingleItemById,
};
