const test = require('ava')

const {getters} = require('../../../../app/client/components/Store.js')

test('Gets the resources list', t => {
  const state = {resources: [1, 2, 3]}

  const resources = getters.resources(state)

  t.is(state.resources, resources)
})
