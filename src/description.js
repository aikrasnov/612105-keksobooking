const packageInfo = require(`../package.json`);

module.exports = {
  name: `description`,
  description: `Напечатать описание программы`,
  execute() {
    console.log(`Автор: ${packageInfo.description}`);
  }
};
