module.exports = {

  get: (request, response, next) => response.json([
    {
      title: 'A trip to Germany',
      source: 'http://maps.google.com',
      tags: ['Travel']
    },
    {
      title: 'An airplane',
      source: 'http://latam.com',
      tags: ['Work']
    }
  ]),

  post: (request, response, next) => response.sendStatus(201)

}
