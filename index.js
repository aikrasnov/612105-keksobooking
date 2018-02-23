const author = require(`./src/commands/author`);
const description = require(`./src/commands/description`);
const error = require(`./src/commands/error`);
const hello = require(`./src/commands/hello`);
const help = require(`./src/commands/help`);
const license = require(`./src/commands/license`);
const version = require(`./src/commands/version`);
const server = require(`./src/commands/server`);

const COMMANDS = [author, description, hello, help, license, version, server];
const args = process.argv.slice(2);

let done = false;

if (args.length !== 0) {

  for (const command of COMMANDS) {

    if (args[0].match(/\w+/) && command.name === args[0].match(/\w+/)[0]) {
      command.execute(args);
      done = true;
    }

  }

  if (!done) {
    error.execute(args[0]);
  }

}

if (!done) {
  hello.execute();
}
