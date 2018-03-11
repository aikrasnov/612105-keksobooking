const ALPHABET = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

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
  TITLES: [`Большая-пребольшая уютнейшная квартира`, `Малюсенькая неуютненькая квартирка`, `Огромный прекрасннейший дворец`, `Некрасивейший негостеприимнный домик`, `Уютнейшее бунгало далеко от моря`, `Неуютнейшее бунгало по колено в воде`],
  NAMES: [`Keks`, `Pavel`, `Nikolay`, `Alex`, `Ulyana`, `Anastasyia`, `Julia`]
};

const PROHIBITED = /=/;

const VALIDATE_ERRORS = [
  {error: `Validation Error`,
    fieldName: `title`,
    errorMessages: `'title' should have minimum length '30'`},
  {error: `Validation Error`,
    fieldName: `address`,
    errorMessages: `'address' should have minimum length '6'`},
  {error: `Validation Error`,
    fieldName: `type`,
    errorMessages: `'bungalo1' should be one of 'flat,palace,house,bungalo'`},
  {error: `Validation Error`,
    fieldName: `price`,
    errorMessages: `'0' should have minimum value '1'`},
  {error: `Validation Error`,
    fieldName: `checkin`,
    errorMessages: `'12:001' should be one of '12:00,13:00,14:00'`},
  {error: `Validation Error`,
    fieldName: `checkout`,
    errorMessages: `'12:010' should be one of '12:00,13:00,14:00'`}
];

const ERROR_MESSAGE = [
  {
    error: `Internal Error`,
    errorMessage: `Server has fallen into unrecoverable problem.`
  }
];

module.exports = {
  ALPHABET,
  VALIDATE_ERRORS,
  ERROR_MESSAGE,
  FILE_TYPES,
  PROHIBITED,
  DATA
};
