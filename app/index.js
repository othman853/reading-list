require('value-box/path')(__dirname, ['/values']);
const { settings } = require('value-box');

const args = require('yargs')
  .alias('a', 'application')
  .demandOption(['a'])
  .argv;

const app = require(`./${args.application}`);

const port = settings[args.application].port;

app.listen(port, () => console.log(`Up on ${port}`));
