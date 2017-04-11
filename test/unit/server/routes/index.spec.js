const it = require('ava')
const sinon = require('sinon')

const routes = require('../../../../app/server/routes')

const request = {}

it('Returns the message on GET', t => {

  const response = { json: sinon.stub() }

  routes.get(request, response)

  t.true(response.json.calledWith({ message: 'Hello, this is server' }))
})

it('Creates something on POST', t => {

  const response = { sendStatus: sinon.stub() }

  routes.post(request, response)

  t.true(response.sendStatus.calledWith(201))

})
