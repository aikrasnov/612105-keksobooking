const express = require(`express`);
const bodyParser = require(`body-parser`);
const {changeOffersDatabase, offersRoute} = require(`./routes/offers/offers-route`);
const {ValidateException} = require(`./exceptions/validate-exception`);
const {ERROR_MESSAGE} = require(`../constants`);
const {logger} = require(`../logger`);

const create = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(`static`));
  app.use((req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
    next();
  });
  app.use(`/api/`, offersRoute);
  app.use((err, req, res, _next) => {
    if (err instanceof ValidateException) {
      return res.status(err.statusCode).json(err.errors);
    } else {
      logger.error(err);
      return res.status(500).json(ERROR_MESSAGE);
    }
  });

  return {app, changeOffersDatabase};
};

const run = (port) => {

  const {app} = create();
  app.listen(port, () => {
    logger.info(`run server on ${port}`);
  });
};


module.exports = {
  create,
  run
};
