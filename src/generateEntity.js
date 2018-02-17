const {randomNumber, randomString} = require(`./utils`);

const generateEntity = () => {

  const length = randomNumber(0, 999);
  const string = randomString(length);
  const photos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
  const features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
  const checkins = [`12:00`, `13:00`, `14:00`];
  const checkouts = [`12:00`, `13:00`, `14:00`];
  const types = [`flat`, `palace`, `house`, `bungalo`];
  const titles = [`Большая уютная квартира`, `Маленькая неуютная квартира`, `Огромный прекрасный дворец`, `Маленький ужасный дворец`, `Красивый гостевой домик`, `Некрасивый негостеприимный домик`, `Уютное бунгало далеко от моря`, `Неуютное бунгало по колено в воде`];

  const author = {
    avatar: `https://robohash.org/${string}`
  };

  const location = {
    x: randomNumber(300, 900),
    y: randomNumber(150, 500)
  };

  const offer = {
    title: titles[randomNumber(0, titles.length - 1)],
    address: `${location.x}, ${location.y}`,
    price: randomNumber(1000, 1000000),
    type: types[randomNumber(0, types.length - 1)],
    rooms: randomNumber(1, 5),
    guests: randomNumber(0, 99),
    checkin: checkins[randomNumber(0, checkins.length - 1)],
    checkout: checkouts[randomNumber(0, checkouts.length - 1)],
    features: features.slice(0, randomNumber(1, features.length - 1)),
    description: ``,
    photos: photos.sort(() => randomNumber(0, 1))
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
