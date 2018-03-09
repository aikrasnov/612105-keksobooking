const {DATA} = require(`../../../../constants`);

const OFFERS_SCHEME = [
  {
    name: `title`,
    type: `string`,
    minLength: 30,
    maxLength: 140
  },
  {
    name: `address`,
    type: `string`,
    minLength: 6,
    maxLength: 100
  },
  {
    name: `type`,
    enum: DATA.TYPES
  },
  {
    name: `price`,
    type: `number`,
    minimum: 1,
    maximum: 100000
  },
  {
    name: `checkin`,
    enum: DATA.CHECKINS
  },
  {
    name: `checkout`,
    enum: DATA.CHECKOUTS
  },
  {
    name: `rooms`,
    type: `number`,
    minimum: 0,
    maximum: 1000
  },
  {
    name: `features`,
    type: `array`,
    required: false,
    // каждый элемент должен быть уникальным. Только для []
    unique: true,
    // каждый элемент должен быть одни из множества. Только для {} || []
    eachOneOf: DATA.FEATURES
  },
  {
    name: `avatar`,
    required: false,
    type: `string`,
    minLength: 3
  },
  {
    name: `preview`,
    required: false,
    type: `string`,
    minLength: 3
  }
];

module.exports = {
  OFFERS_SCHEME
};
