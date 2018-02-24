const {executeCommand} = require(`./src/executer`);
const {parse} = require(`./src/arg-parser`);

const cliArgs = process.argv.slice(2);

executeCommand(parse(cliArgs));
