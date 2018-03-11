const normalizeOffer = (income) => {

  const outcome = {};

  outcome.offer = {
    title: String(income.title),
    address: String(income.address),
    price: Number(income.price),
    type: String(income.type),
    rooms: Number(income.rooms),
    checkin: String(income.checkin),
    checkout: String(income.checkout)
  };

  if (typeof income.description !== `undefined`) {
    outcome.offer.description = income.description;
  }

  if (Array.isArray(income.features)) {
    outcome.offer.features = income.features;
  }

  if (typeof income.photos !== `undefined`) {
    outcome.offer.photos = income.photos;
  }

  if (typeof income.date !== `undefined`) {
    outcome.date = income.date;
  }

  outcome.author = {};
  if (typeof income.name !== `undefined`) {
    outcome.author.name = income.name;
  } else {
    outcome.author.name = [`Keks`, `Pavel`, `Nikolay`, `Alex`, `Ulyana`, `Anastasyia`, `Julia`][Math.floor(Math.random() * 7)];
  }

  if (typeof income.guests !== `undefined` && !isNaN(Number(income.guests))) {
    outcome.offer.guests = Number(income.guests);
  } else {
    outcome.offer.guests = 0;
  }

  if (typeof income.avatar !== `undefined`) {
    if (typeof outcome.author !== `object`) {
      outcome.author = {};
    }

    outcome.author.avatar = income.avatar;
  }

  if (!Array.isArray(income.photos)) {
    outcome.offer.photos = [];
  } else {
    outcome.offer.photos = income.photos;
  }

  if (!Array.isArray(income.features)) {
    outcome.offer.features = [];
  } else {
    outcome.offer.features = income.features;
  }

  if (income.address.match(/^\d+, \d+$/)) {
    const address = income.address.replace(/\s/g, ``).match(/\d+/g);
    if (address[0] && address[1]) {
      outcome.location = {};
      outcome.location.x = Number(address[0]);
      outcome.location.y = Number(address[1]);
    }
  }

  return outcome;
};

module.exports = {normalizeOffer};
