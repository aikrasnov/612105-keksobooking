const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `напечатать тип лицензии`,
  execute() {
    console.log(`Лицензия: ${packageInfo.license}`);
  }
};
