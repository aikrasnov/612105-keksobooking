module.exports = {
  name: `hello`,
  description: `Напечатать приветствие`,
  execute() {
    console.log(`\
Привет пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Александр Краснов.\
`);
    process.exit(0);
  }
};
