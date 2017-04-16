const test = require('ava')
const sinon = require('sinon')

const resources = require('../../../../../app/client/bff/routes/resources').default

const request = {}

test('Registers a getter method', t => {
  const route = { get: sinon.stub() }
  const service = { resourcesService: { get: sinon.stub() } }

  resources(route)()

  t.true(route.get.called)

})

test.skip('Interacts with request', t => {
  let handler = null
  const route = { get: h => handler = h }
  const service = { get: sinon.stub() }
  const request = { log: sinon.stub() }

  resources(route)(service)

  handler(request, sinon.stub())

  t.true(service.get.called)
})
