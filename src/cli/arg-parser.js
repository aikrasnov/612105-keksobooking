const {PROHIBITED} = require(`../constants`);

/**
 * Распарсить команды из process.argv
 * @param {String[]} args
 * @return {Object[]|null}
 */
const parse = (args) => {

  const parsedArgs = [];

  for (let i = 0; i < args.length; i++) {

    if (args[i].match(PROHIBITED)) {
      console.error(`"${args[i].match(PROHIBITED)[0]}" запрещен`);
      process.exit(0);
    }

    if (args[i].match(/^--/)) {

      // если следющий аргумент не начинается с -- забираем его значение для текущего
      if (args[i + 1] && !args[i + 1].match(/^--/)) {

        parsedArgs.push({
          name: args[i],
          value: args[i + 1]
        });

      } else {

        parsedArgs.push({
          name: args[i],
          value: null
        });

      }
    }

  }

  return parsedArgs.length === 0 ? null : parsedArgs;

};

module.exports = {
  parse
};
