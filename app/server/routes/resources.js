module.exports = {

  get: (request, response, next) => response.json([
    { title: 'A trip to Germany', source: 'maps.google.com' },
    { title: 'An airplane', source: 'latam.com' }
  ]),

  post: (request, response, next) => response.sendStatus(201)

}
