const it = require('ava')

const { getters } = require('../../../../app/client/public/js/src/Store.js')

it('Gets the resources list', t => {

  const state = { resources: [1, 2, 3] }

  const resources = getters.resources(state)

  t.equal(state.resources, resources)

})
