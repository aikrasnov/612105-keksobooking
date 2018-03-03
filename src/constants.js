const FILE_TYPES = {
  'css': `text/css`,
  'html': `text/html; charset=UTF-8`,
  'jpg': `image/jpeg`,
  'png': `image/png`,
  'ico': `image/x-icon`
};

const DATA = {
  PHOTOS: [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`],
  FEATURES: [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`],
  CHECKINS: [`12:00`, `13:00`, `14:00`],
  CHECKOUTS: [`12:00`, `13:00`, `14:00`],
  TYPES: [`flat`, `palace`, `house`, `bungalo`],
  TITLES: [`Большая-пребольшая уютнейшная квартира`, `Малюсенькая неуютненькая квартирка`, `Огромный прекраснейший дворец`, `Некрасивейший негостеприимный домик`, `Уютнейшее бунгало далеко от моря`, `Неуютнейшее бунгало по колено в воде`],
  NAMES: [`Keks`, `Pavel`, `Nikolay`, `Alex`, `Ulyana`, `Anastasyia`, `Julia`]
};

const PROHIBITED = /=/;

const ERROR_MESSAGE = [
  {
    error: `Internal Error`,
    errorMessage: `Server has fallen into unrecoverable problem.`
  }
];

module.exports = {
  ERROR_MESSAGE,
  FILE_TYPES,
  PROHIBITED,
  DATA
};
