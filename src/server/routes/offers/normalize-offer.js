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

  if (typeof income.name !== `undefined`) {
    outcome.author = {};
    outcome.author.name = income.name;
  }

  if (typeof income.guests !== `undefined`) {
    outcome.offer.guests = Number(income.guests);
  }

  if (typeof income.avatar !== `undefined`) {
    if (typeof outcome.author !== `object`) {
      outcome.author = {};
    }

    outcome.author.avatar = income.avatar;
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
