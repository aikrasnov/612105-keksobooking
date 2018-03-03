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
  TITLES: [`Большая-пребольшая уютнейшная квартира`, `Малюсенькая неуютненькая квартирка`, `Огромный прекраснейший дворец`, `Некрасивейший негостеприимнный домик`, `Уютнейшее бунгало далеко от моря`, `Неуютнейшее бунгало по колено в воде`],
  NAMES: [`Keks`, `Pavel`, `Nikolay`, `Alex`, `Ulyana`, `Anastasyia`, `Julia`]
};

const PROHIBITED = /=/;

const INVALID_DATA = {
  "author": {
    "avatar": ``
  },
  "offer": {
    "title": `longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong`,
    "address": 1,
    "price": -1000,
    "type": ``,
    "rooms": 9999,
    "guests": ``,
    "checkin": ``,
    "checkout": `19:00`},
  "location": {
    "x": ``,
    "y": ``
  },
  "date": ``
};

const VALIDATE_ERRORS = [
  {
    "error": `Validation Error`,
    "fieldName": `avatar`,
    "errorMessages": `'avatar' should have minimum length '21'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `title`,
    "errorMessages": `'title' should have maximum length '140'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `address`,
    "errorMessages": `'address' should have type 'string'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `type`,
    "errorMessages": `'' should be one of 'flat,palace,house,bungalo'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `price`,
    "errorMessages": `'-1000' should have minimum value '1'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `checkin`,
    "errorMessages": `'' should be one of '12:00,13:00,14:00'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `checkout`,
    "errorMessages": `'19:00' should be one of '12:00,13:00,14:00'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `rooms`,
    "errorMessages": `'9999' should have maximum value '1000'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `x`,
    "errorMessages": `'x' should have type 'number'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `y`,
    "errorMessages": `'y' should have type 'number'`
  },
  {
    "error": `Validation Error`,
    "fieldName": `date`,
    "errorMessages": `'date' should have minimum length '13'`
  }
];

const ERROR_MESSAGE = [
  {
    error: `Internal Error`,
    errorMessage: `Server has fallen into unrecoverable problem.`
  }
];

module.exports = {
  VALIDATE_ERRORS,
  ERROR_MESSAGE,
  INVALID_DATA,
  FILE_TYPES,
  PROHIBITED,
  DATA
};
