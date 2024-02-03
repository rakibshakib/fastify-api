const itemList = require("../data").itemsArray;

function itemsRoutes(fastify, options, done) {
  fastify.get("/hello", async (request, reply) => {
    return { itemList };
  });
  fastify.get("/items/:id", async (request, reply) => {
    const id = request.params.id;
    console.log(id);
    const item = itemList.find((pro) => pro.id === id) || {};
    console.log(item);
    return { data: item };
  });

  done();
}

module.exports = itemsRoutes;
