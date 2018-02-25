const {generateEntity} = require(`../../generate-entity`);
const {Router} = require(`express`);

const offersRoute = new Router();

offersRoute.get(`/offers`, (req, res) => {

  const limit = Number(req.query.limit) || 20;
  const skip = Number(req.query.skip);

  let result = [];
  for (let i = 0; i < limit; i++) {
    result.push(generateEntity());
  }

  if (skip) {
    result = result.slice(skip);
  }

  res.statusCode = 200;
  res.setHeader(`content-type`, `application/json; charset=utf-8`);
  res.send(result);
});

offersRoute.get(`/offers/:date`, (req, res) => {

  const entity = generateEntity();
  // у entity нет date из-за бага в постановки задачи (?)
  // нужно поправить потом
  entity.date = req.params.date;

  res.setHeader(`content-type`, `application/json; charset=utf-8`);
  res.statusCode = 200;
  res.send(entity);

});

module.exports = {
  offersRoute
};
