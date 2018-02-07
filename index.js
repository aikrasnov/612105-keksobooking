const ARGS = process.argv.slice(2);
const VERSION = `0.0.1`;

switch (ARGS[0]) {
  case `--help`:
  case `-help`:
    console.log(`Доступные команды:\n--help    — печатает этот текст;\n--version — печатает версию приложения;`);
    process.exit(0);
    break;

  case `--version`:
  case `-version`:
    console.log(`Версия ${VERSION}`);
    process.exit(0);
    break;

  case undefined:
    console.log(`Привет пользователь!\nЭта программа будет запускать сервер «Кексобукинг».\nАвтор: Александр Краснов.`);
    process.exit(0);
    break;

  default:
    console.error(`Неизвестная команда ${ARGS[0]}. Чтобы прочитать правила использования приложения, наберите "--help"`);
    process.exit(1);

}
