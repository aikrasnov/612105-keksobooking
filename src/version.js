const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Напечатать версию программы`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
