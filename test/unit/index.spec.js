const it = require('ava');

const app = require('../../app');

it('works with ava', t => {

  t.is(app(1), 2);

});
