module.exports = {
  name: `help`,
  description: `Напечатать хэлп`,
  execute() {
    console.log(`\
Доступные команды:
--help — печатает этот текст;
--version — печатает версию приложения;\
`);
  }
};
