const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Напечатать тип лицензии`,
  execute() {
    console.log(`Лицензия: ${packageInfo.license}`);
  }
};
