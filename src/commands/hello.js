const {generateEntity} = require(`../generateEntity`);
const {askQuestion, repeatQuestion, writeFile, exists} = require(`../utils`);
const readline = require(`readline`);
require(`colors`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  promt: `>>>`
});


module.exports = {
  name: `hello`,
  description: `напечатать приветствие, сгенерировать данные`,
  execute: async () => {
    console.log(`\
Привет пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Александр Краснов.\n\
`.green);

    const ask = async () => {

      const yes = /^yes$|^да$/;
      const no = /^no$|^нет$/;
      const validAnswer = /^yes$|^да$|^no$|^нет$/;
      const templateAnswer = `наберите да или нет`;
      const bye = `Пока!`.red;

      let answer = await repeatQuestion(rl, `Хотите сгенерировать данные? `, templateAnswer, (str) => str.toLowerCase().match(validAnswer));
      answer = answer.toLowerCase();

      if (answer.match(yes)) {

        const count = Number(await repeatQuestion(rl, `Сколько сгенерировать объектов? `, `количество должно быть целым числом `, (number) => number.match(/^[0-9]+$/) && !isNaN(number)));
        console.log(`Будет сгенерировано: ${count}`);
        const path = await askQuestion(rl, `Куда сохранить объекты? `);

        if (await exists(path)) {
          const rewrite = await repeatQuestion(rl, `Перезаписать файл? `, templateAnswer, (str) => str.toLowerCase().match(validAnswer));

          if (rewrite.match(no)) {
            console.log(bye);
            return;
          }
        }

        const result = [];
        for (let i = 1; i <= count; i++) {
          result.push(generateEntity());
        }
        console.log(`Сгенерировано ${result.length} объектов!`);

        await writeFile(path, JSON.stringify(result), `utf8`);
        console.log(`Все успешно записано в файл ${path}`.green);

      } else if (answer.match(no)) {

        console.log(bye);

      } else {

        console.log(templateAnswer);
        await ask();
      }

    };

    try {
      await ask();
      rl.close();
      process.exit(0);
    } catch (error) {
      console.log(`Что-то пошло не так!`.red);
      console.error(error);
      process.exit(1);
    }

  }
};
