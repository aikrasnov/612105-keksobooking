require(`colors`);

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomString = (length) => {
  let text = ``;
  let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  for (let i = 0; i < length; i++) {
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return text;
};

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
  let answer = await askQuestion(rl, question);

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
  repeatQuestion
};
