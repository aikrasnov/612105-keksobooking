const author = require(`./commands/author`);
const description = require(`./commands/description`);
const hello = require(`./commands/hello`);
const help = require(`./commands/help`);
const license = require(`./commands/license`);
const server = require(`./commands/server`);
const version = require(`./commands/version`);
require(`colors`);

const COMMANDS = {
  '--author': author,
  '--description': description,
  '--hello': hello,
  '--help': help,
  '--license': license,
  '--server': server,
  '--version': version
};

/**
 * Запустить команды, распарсенные из process.argv
 * @param {Object[]} args массив аргументов
 */
const executeCommand = (args) => {

  if (args) {

    for (const arg of args) {

      try {
        COMMANDS[arg.name].execute(arg);
      } catch (err) {
        console.error(`Can't execute command "${arg.name}"`.red);
        console.error(err);
        process.exit(1);
      }

    }

  } else {

    hello.execute();

  }

};

module.exports = {
  executeCommand
};
