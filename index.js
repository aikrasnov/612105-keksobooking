const args = process.argv.slice(2);
const VERSION = `0.0.1`;

switch (args[0]) {
  case `--help`:
  case `-help`:
    console.log(`\
Доступные команды:
--help — печатает этот текст;
--version — печатает версию приложения;\
`);
    process.exit(0);
    break;

  case `--version`:
  case `-version`:
    console.log(`Версия ${VERSION}`);
    process.exit(0);
    break;
  // eslint-disable-next-line no-undefined
  case undefined:
    console.log(`\
Привет пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Александр Краснов.\
`);
    process.exit(0);
    break;

  default:
    console.error(`\
Неизвестная команда ${args[0]}. Чтобы прочитать правила использования приложения, наберите "--help"\
`);
    process.exit(1);

}
