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

// promisify из utils не помог. При вызове questionAsync TypeError: Cannot read property '_questionCallback' of undefined
const questionAsync = (query, rl) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });

};

/**
 * Повторять вопрос, пока не ответ не будет корректным
 * @param {Object} rl
 * @param {String} question строка вопроса
 * @param {String} message сообщение которое нужно вывести, если ввод был не правильный
 * @param {Function} callback функция для проверки ответа на корректность
 * @return {Promise<*>}
 */
const repeatQuestion = async (rl, question, message, callback) => {
  let answer = await questionAsync(question, rl);

  if (typeof callback !== `function`) {
    throw new Error(`Callback must be a function!`);
  }

  if (callback(answer)) {

    console.log(`OK`.green);
    return answer;

  } else {

    if (message) {
      console.log(message.red);
    }

    return repeatQuestion(rl, question, message, callback);
  }
};

module.exports = {
  questionAsync,
  randomNumber,
  randomString,
  repeatQuestion
};
