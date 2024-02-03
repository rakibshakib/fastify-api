const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes/item"));

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    console.log(err, "error: on starting server");
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
