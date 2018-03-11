require(`colors`);
const fs = require(`fs`);
const {promisify} = require(`util`);
const {ALPHABET} = require(`./constants`);

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const exists = promisify(fs.exists);

/**
 * Сгенерировать случайное число
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Сгенерировать рандомную строку
 * @param {Number} length длина строки
 * @return {string}
 */
const randomString = (length) => {
  let text = ``;
  for (let i = 0; i < length; i++) {
    text += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return text;
};

/**
 * Напечатать вопрос, прочитать ответ
 * @param {Object} rl
 * @param {String} query
 * @return {Promise<any>}
 */
const askQuestion = (rl, query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });

};

/**
 * Повторять вопрос, пока не ответ не будет корректным
 * @param {Object} rl
 * @param {String} question строка вопроса
 * @param {String} message сообщение которое нужно вывести, если ввод был не правильный
 * @param {Function} checkFunction функция для проверки ответа на корректность
 * @return {Promise<*>}
 */
const repeatQuestion = async (rl, question, message, checkFunction) => {
  const answer = await askQuestion(rl, question);

  if (typeof checkFunction !== `function`) {
    throw new Error(`last arg must be a function!`);
  }

  if (checkFunction(answer)) {

    console.log(`OK`.green);
    return answer;

  } else {

    if (message) {
      console.log(message.red);
    }

    return repeatQuestion(rl, question, message, checkFunction);
  }
};

module.exports = {
  askQuestion,
  randomNumber,
  randomString,
  repeatQuestion,
  readFile,
  writeFile,
  exists
};
