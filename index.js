const author = require(`./src/author`);
const description = require(`./src/description`);
const error = require(`./src/error`);
const hello = require(`./src/hello`);
const help = require(`./src/help`);
const license = require(`./src/license`);
const version = require(`./src/version`);

const COMMANDS = [author, description, hello, help, license, version];
const args = process.argv.slice(2);

for (const command of COMMANDS) {

  try {

    // если не получилось нормализовать аргумент, значит ничего не передано
    if (command.name === args[0].replace(/-/g, ``)) {
      command.execute();
      process.exit(0);
    }

  } catch (err) {

    // если ничего не переданно выводим приветствие
    hello.execute();
    process.exit(0);

  }


}

error.execute(args[0]);
