const {
  getAllItems,
  getSingleItemById,
} = require("../controller/items.controller");

// common item schema
const ITEMS = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    details: { type: "string" },
    price: { type: "number" },
    brand: { type: "string" },
    inStock: { type: "boolean" },
  },
};
// options for get all items
const getAllItemsOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: ITEMS,
      },
    },
  },
  preHandler: async (request, reply) => {
    console.log("check auth....");
  },
  handler: getAllItems,
};

const singleItemsOptions = {
  schema: {
    response: {
      200: ITEMS,
    },
  },
  handler: getSingleItemById,
};

const itemsRoutes = (fastify, options, done) => {
  // get all items
  fastify.get("/items", getAllItemsOptions);

  // get single item by item id
  fastify.get("/items/:id", singleItemsOptions);

  done();
};

module.exports = itemsRoutes;
