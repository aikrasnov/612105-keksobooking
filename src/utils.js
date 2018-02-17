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

module.exports = {
  randomNumber,
  randomString
};
