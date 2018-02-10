const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `напечатать автора программы`,
  execute() {
    console.log(`Автор: ${packageInfo.author}`);
  }
};
