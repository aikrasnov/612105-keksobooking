const packageInfo = require(`../../package`);

module.exports = {
  name: `description`,
  description: `напечатать описание программы`,
  execute() {
    console.log(`Автор: ${packageInfo.description}`);
    process.exit(0);
  }
};
