const {randomNumber} = require(`../../utils`);
const {store} = require(`../../memory-store`);
const {Router} = require(`express`);

const offersRoute = new Router();

offersRoute.get(`/offers`, (req, res) => {
  res.setHeader(`content-type`, `application/json; charset=utf-8`);

  const limit = Number(req.query.limit) || 20;
  const skip = Number(req.query.skip);

  const allEntity = store.getAll();
  let result = [];

  for (let i = 0; i < limit; i++) {

    if (allEntity[i]) {
      result.push(allEntity[i]);
    }
  }

  if (skip) {
    result = result.slice(skip);
  }

  res.status(200);
  res.send(result);
});

offersRoute.post(`/offers`, (req, res) => {
  res.setHeader(`content-type`, `application/json; charset=utf-8`);
  // случайный ключ для кэша
  const key = `${Date.now()}_${randomNumber(1, 999999)}`;

  store.put(key, req.body);
  res.status(200);
  res.send();
});

offersRoute.get(`/offers/:date`, (req, res) => {

  res.setHeader(`content-type`, `application/json; charset=utf-8`);
  const allEntity = store.getAll();
  const {date} = req.params;

  if (allEntity.length !== 0) {

    for (const el of allEntity) {
      if (date === String(el.date)) {
        res.status(200);
        res.send(el);
        return;
      }
    }
  }


  res.status(404);
  res.send({message: `offer with date "${date}" not found`});

});

module.exports = {
  offersRoute
};
