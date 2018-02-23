const author = require(`./author`);
const description = require(`./description`);
const hello = require(`./hello`);
const license = require(`./license`);
const version = require(`./version`);
const server = require(`./server`);
require(`colors`);

const commands = [author, description, hello, license, version, server].map((cmd) => `${`--`.grey}${cmd.name.grey} - ${cmd.description.green}`).join(`\n`);

module.exports = {
  name: `help`,
  description: `напечатать хэлп`,
  execute() {
    console.log(`Доступные команды:\n${`--`.grey}${this.name.grey} - ${this.description.green}\n${commands}`);
    process.exit(0);
  }
};
