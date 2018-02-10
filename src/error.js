module.exports = {
  name: `error`,
  description: `Напечатать ошибку`,
  execute(command) {
    console.error(`\
Неизвестная команда ${command}. Чтобы прочитать правила использования приложения, наберите "--help"\
`);
    process.exit(1);
  }
};
