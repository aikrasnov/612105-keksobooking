require(`colors`);

module.exports = {
  name: `hello`,
  description: `напечатать приветствие`,
  execute() {
    console.log(`\
Привет пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Александр Краснов.\n\
`.green);
  }
};
