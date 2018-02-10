const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `напечатать версию программы`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
