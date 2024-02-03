const itemList = require("../data").itemsArray;

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
};

const singleItemsOptions = {
  schema: {
    response: {
      200: ITEMS,
    },
  },
};

const itemsRoutes = (fastify, options, done) => {
  // get all items
  fastify.get("/items", getAllItemsOptions, async (request, reply) => {
    reply.send(itemList);
  });

  // get single item by item id
  fastify.get("/items/:id", singleItemsOptions, async (request, reply) => {
    reply.send(itemList.find((pro) => pro.id === request.params.id) || {});
  });

  done();
};

module.exports = itemsRoutes;
