const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Напечатать автора программы`,
  execute() {
    console.log(`Автор: ${packageInfo.author}`);
  }
};
