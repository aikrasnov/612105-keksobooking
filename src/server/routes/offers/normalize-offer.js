const normalizeOffer = (income) => {

  const outcome = {};

  outcome.offer = {
    title: String(income.title),
    address: String(income.address),
    price: Number(income.price),
    type: String(income.type),
    rooms: String(income.guests),
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

  if (typeof income.x === `number` && typeof income.y === `number`) {
    outcome.location = {};
    outcome.location.x = income.x;
    outcome.location.y = income.y;
  }

  if (typeof income.date !== `undefined`) {
    outcome.date = income.date;
  }

  if (typeof income.name !== `undefined`) {
    outcome.author = {};
    outcome.author.name = income.name;
  }

  if (typeof income.avatar !== `undefined`) {
    if (typeof outcome.author !== `object`) {
      outcome.author = {};
    }

    outcome.author.avatar = income.avatar;
  }

  return outcome;
};

module.exports = {normalizeOffer};
