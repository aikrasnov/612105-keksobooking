const {randomNumber} = require(`../../../utils`);
const {store} = require(`../../../memory-store`);
const {OFFERS_SCHEME} = require(`./scheme/offers`);
const {validator} = require(`../../middleware/validator`);
const {Router} = require(`express`);

const offersRoute = new Router();

offersRoute.get(`/offers`, (req, res) => {
  const limit = Number(req.query.limit) || 20;
  const skip = Number(req.query.skip) || 0;

  res.send(store.getAll().slice(skip, skip + limit));
});

offersRoute.post(`/offers`, validator(OFFERS_SCHEME), (req, res) => {
  // случайный ключ для кэша
  const key = `${Date.now()}_${randomNumber(1, 999999)}`;

  store.put(key, req.body);
  res.send(req.body);
});

offersRoute.get(`/offers/:date`, (req, res) => {
  const allEntity = store.getAll();
  const {date} = req.params;
  let entity;

  entity = allEntity.find((el) => {
    return el.date === date;
  });

  if (entity) {
    res.send(entity);
    return;
  }

  res.status(404).send({error: `Not Found`, errorMessages: `offer with date "${date}" not found`});
});

offersRoute.all(`/offers`, (req, res) => {
  res.status(501).send({error: `Internal Error`, errorMessages: `Method not implemented`});
});

module.exports = {
  offersRoute
};
