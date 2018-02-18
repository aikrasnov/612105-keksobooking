const {generateEntity} = require(`./src/generateEntity`);
const {questionAsync, repeatQuestion} = require(`./src/utils`);
const author = require(`./src/author`);
const description = require(`./src/description`);
const error = require(`./src/error`);
const hello = require(`./src/hello`);
const help = require(`./src/help`);
const license = require(`./src/license`);
const version = require(`./src/version`);
const readline = require(`readline`);
const fs = require(`fs`);
const {promisify} = require(`util`);
require(`colors`);

const writeFileAsync = promisify(fs.writeFile);
const COMMANDS = [author, description, hello, help, license, version];
const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  promt: `>>>`
});

if (args.length !== 0) {

  for (const command of COMMANDS) {

    if (command.name === args[0].replace(/-/g, ``)) {
      command.execute();
      process.exit(0);
    }

  }

  error.execute(args[0]);

}

hello.execute();

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
    const path = await questionAsync(`Куда сохранить объекты? `, rl);

    if (fs.existsSync(path)) {
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

    await writeFileAsync(path, JSON.stringify(result), `utf8`);
    console.log(`Все успешно записано в файл ${path}`.green);

  } else if (answer.match(no)) {

    console.log(bye);

  } else {

    console.log(templateAnswer);
    ask();
  }

};

ask()
    .then(() => rl.close())
    .catch((err) => {
      console.log(`Что-то пошло не так!`.red);
      console.error(err);
      process.exit(1);
    });


