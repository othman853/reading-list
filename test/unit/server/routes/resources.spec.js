const test = require('ava')
const sinon = require('sinon')

const routes = require('../../../../app/server/routes/resources')

const request = {}

test('Returns 201 on POST', t => {
  const response = {sendStatus: sinon.stub()}

  routes.post(request, response)

  t.true(response.sendStatus.calledWith(201))
})
