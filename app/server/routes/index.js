module.exports = {

  get: (request, response, next) => response.json({
    message: 'Hello, this is server'
  }),

  post: (request, response, next) => response.sendStatus(201)

}
