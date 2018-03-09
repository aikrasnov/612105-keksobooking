const packageInfo = require(`../../../package`);

module.exports = {
  name: `license`,
  description: `напечатать тип лицензии`,
  execute() {
    console.log(`Лицензия: ${packageInfo.license}`);
    process.exit(0);
  }
};
