const args = process.argv.slice(2);
const version = '0.0.1';

switch (args[0]) {
  case '--help':
  case '-help':
    console.log('Доступные команды:\n' +
      '--help    — печатает этот текст;\n' +
      '--version — печатает версию приложения;');
    process.exit(0);

  case '--version':
  case '-version':
    console.log(`Версия ${version}`);
    process.exit(0);

  case 'undefined':
    console.log('Привет пользователь!\n' +
      'Эта программа будет запускать сервер «Кексобукинг».\n' +
      'Автор: Александр Краснов.');
    process.exit(0);

  default:
    console.error(`Неизвестная команда ${args[0]}. Чтобы прочитать правила использования приложения, наберите "--help"`);
    process.exit(1);

}
