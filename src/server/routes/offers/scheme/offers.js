const {DATA} = require(`../../../../constants`);

const OFFERS_SCHEME = [
  {
    // путь до проперти в бади
    name: `author`,
    // тип значения по пути
    type: `object`,
    // проверяем поле на пустоту {} || []
    cantBeEmpty: true,
    // список вложенных объектов для проверки
    properties: [
      {
        name: `avatar`,
        type: `string`,
        // ссылка на robohash поэтому чекаем, что она не короче https://robohash.org/ -- 21 символ
        minLength: 21
      },
      {
        name: `name`,
        type: `string`,
        minLength: 1
      }
    ]
  },
  {
    name: `offer`,
    type: `object`,
    // обязательность поля
    required: true,
    shouldHave: [`title`, `address`, `price`, `type`, `rooms`, `guests`, `checkin`, `checkout`],
    properties: [
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
    ]
  },
  {
    name: `location`,
    type: `object`,
    shouldHave: [`x`, `y`],
    properties: [
      {
        name: `x`,
        type: `number`,
      },
      {
        name: `y`,
        type: `number`
      }
    ]
  },
  {
    name: `date`,
    type: `string`,
    minLength: 13
  }
];

module.exports = {
  OFFERS_SCHEME
};
