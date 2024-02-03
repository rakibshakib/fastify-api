const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes/item"));

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    console.log(err, "as listening fastify");
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
