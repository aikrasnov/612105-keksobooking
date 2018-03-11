const {executeCommand} = require(`./src/cli/executer`);
const {parse} = require(`./src/cli/arg-parser`);
require(`dotenv`).config();

const cliArgs = process.argv.slice(2);

executeCommand(parse(cliArgs));
