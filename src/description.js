const packageInfo = require(`../package.json`);

module.exports = {
  name: `description`,
  description: `напечатать описание программы`,
  execute() {
    console.log(`Автор: ${packageInfo.description}`);
  }
};
