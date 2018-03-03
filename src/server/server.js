const express = require(`express`);
const bodyParser = require(`body-parser`);
const {offersRoute} = require(`./routes/offers/offers`);
const {ValidateException} = require(`./exceptions/validate-exception`);
const {ERROR_MESSAGE} = require(`../constants`);

const create = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(express.static(`static`));
  app.use(`/api/`, offersRoute);
  app.use((err, req, res, _next) => {
    if (err instanceof ValidateException) {
      return res.status(err.statusCode).json(err.errors);
    } else {
      console.error(err);
      return res.status(500).json(ERROR_MESSAGE);
    }


  });

  return app;
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
