const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/g', function (request, reply) {
  reply.redirect("https://www.google.com")
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})