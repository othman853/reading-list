const it = require('ava')
const sinon = require('sinon')

const routes = require('../../../../app/server/routes/resources')

const request = {}

it('Returns the message on GET', t => {

  const response = { json: sinon.stub() }
  const expectedResponse = [
    { title: 'A trip to Germany', source: 'http://maps.google.com' },
    { title: 'An airplane', source: 'http://latam.com' }
  ]

  routes.get(request, response)

  t.true(response.json.calledWith(expectedResponse))
})

it('Creates something on POST', t => {

  const response = { sendStatus: sinon.stub() }

  routes.post(request, response)

  t.true(response.sendStatus.calledWith(201))

})
