const {randomNumber, randomString} = require(`./utils`);

const generateEntity = () => {

  const length = randomNumber(0, 999);
  const string = randomString(length);
  const DATA = {
    photos: [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`],
    features: [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`],
    checkins: [`12:00`, `13:00`, `14:00`],
    checkouts: [`12:00`, `13:00`, `14:00`],
    types: [`flat`, `palace`, `house`, `bungalo`],
    titles: [`Большая уютная квартира`, `Маленькая неуютная квартира`, `Огромный прекрасный дворец`, `Маленький ужасный дворец`, `Красивый гостевой домик`, `Некрасивый негостеприимный домик`, `Уютное бунгало далеко от моря`, `Неуютное бунгало по колено в воде`]
  };

  const author = {
    avatar: `https://robohash.org/${string}`
  };

  const location = {
    x: randomNumber(300, 900),
    y: randomNumber(150, 500)
  };

  const offer = {
    title: DATA.titles[randomNumber(0, DATA.titles.length - 1)],
    address: `${location.x}, ${location.y}`,
    price: randomNumber(1000, 1000000),
    type: DATA.types[randomNumber(0, DATA.types.length - 1)],
    rooms: randomNumber(1, 5),
    guests: randomNumber(0, 99),
    checkin: DATA.checkins[randomNumber(0, DATA.checkins.length - 1)],
    checkout: DATA.checkouts[randomNumber(0, DATA.checkouts.length - 1)],
    features: DATA.features.slice(0, randomNumber(1, DATA.features.length - 1)),
    description: ``,
    photos: DATA.photos.sort(() => randomNumber(0, 1))
  };

  return {
    author,
    offer,
    location
  };

};

module.exports = {
  generateEntity
};
