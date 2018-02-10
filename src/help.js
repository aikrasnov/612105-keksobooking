const author = require(`./author`);
const description = require(`./description`);
const hello = require(`./hello`);
const license = require(`./license`);
const version = require(`./version`);

const COMMANDS = [author, description, hello, license, version].map((cmd) => `--${cmd.name} - ${cmd.description}`).join(`\n`);

module.exports = {
  name: `help`,
  description: `напечатать хэлп`,
  execute() {
    console.log(`Доступные команды:\n${COMMANDS}`);
  }
};
