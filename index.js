const author = require(`./src/author`);
const description = require(`./src/description`);
const error = require(`./src/error`);
const hello = require(`./src/hello`);
const help = require(`./src/help`);
const license = require(`./src/license`);
const version = require(`./src/version`);

const COMMANDS = [author, description, hello, help, license, version];
const args = process.argv.slice(2);

if (args.length !== 0) {

  for (const command of COMMANDS) {

    if (command.name === args[0].replace(/-/g, ``)) {
      command.execute();
      process.exit(0);
    }

  }

} else {

  hello.execute();
  process.exit(0);

}

error.execute(args[0]);
