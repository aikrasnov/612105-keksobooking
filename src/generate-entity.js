const {randomNumber, randomString} = require(`./utils`);

/**
 * Сгенерировать сущность для кекбукинга
 * @return {{author: {avatar: string}, offer: {title: string, address: string, price: *, type: string, rooms: *, guests: *, checkin: string, checkout: string, features: string[], description: string, photos: string[]}, location: {x: *, y: *}}}
 */
const generateEntity = () => {

  const length = randomNumber(0, 999);
  const string = randomString(length);
  const DATA = {
    PHOTOS: [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`],
    FEATURES: [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`],
    CHECKINS: [`12:00`, `13:00`, `14:00`],
    CHECKOUTS: [`12:00`, `13:00`, `14:00`],
    TYPES: [`flat`, `palace`, `house`, `bungalo`],
    TITLES: [`Большая уютная квартира`, `Маленькая неуютная квартира`, `Огромный прекрасный дворец`, `Маленький ужасный дворец`, `Красивый гостевой домик`, `Некрасивый негостеприимный домик`, `Уютное бунгало далеко от моря`, `Неуютное бунгало по колено в воде`]
  };

  const author = {
    avatar: `https://robohash.org/${string}`
  };

  const location = {
    x: randomNumber(300, 900),
    y: randomNumber(150, 500)
  };

  const offer = {
    title: DATA.TITLES[randomNumber(0, DATA.TITLES.length - 1)],
    address: `${location.x}, ${location.y}`,
    price: randomNumber(1000, 1000000),
    type: DATA.TYPES[randomNumber(0, DATA.TYPES.length - 1)],
    rooms: randomNumber(1, 5),
    guests: randomNumber(0, 99),
    checkin: DATA.CHECKINS[randomNumber(0, DATA.CHECKINS.length - 1)],
    checkout: DATA.CHECKOUTS[randomNumber(0, DATA.CHECKOUTS.length - 1)],
    features: DATA.FEATURES.slice(0, randomNumber(1, DATA.FEATURES.length - 1)),
    description: ``,
    photos: DATA.PHOTOS.sort(() => randomNumber(0, 1))
  };

  return {
    author,
    offer,
    location,
    date: String(Date.now())
  };

};

module.exports = {
  generateEntity
};
