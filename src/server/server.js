const express = require(`express`);
const bodyParser = require(`body-parser`);
const {changeOffersDatabase, offersRoute} = require(`./routes/offers/offers-route`);
const {ValidateException} = require(`./exceptions/validate-exception`);
const {OfferAlreadyExistsError} = require(`./exceptions/offer-already-exists`);
const {ERROR_MESSAGE} = require(`../constants`);

const create = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(`static`));
  app.use(`/api/`, offersRoute);
  app.use((err, req, res, _next) => {
    if (err instanceof ValidateException) {
      return res.status(err.statusCode).json(err.errors);
    } else if (err instanceof OfferAlreadyExistsError) {
      return res.status(err.statusCode).json({error: `Duplicate Error`, fieldName: `offer`, message: err.message});
    } else {
      console.error(err);
      return res.status(500).json(ERROR_MESSAGE);
    }


  });

  return {app, changeOffersDatabase};
};

const run = (port) => {

  const app = create();
  app.listen(port, () => {
    console.log(`run server on ${port}`);
  });
};


module.exports = {
  create,
  run
};
