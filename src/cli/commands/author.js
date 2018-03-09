const packageInfo = require(`../../../package`);

module.exports = {
  name: `author`,
  description: `напечатать автора программы`,
  execute() {
    console.log(`Автор: ${packageInfo.author}`);
    process.exit(0);
  }
};
