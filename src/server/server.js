const express = require(`express`);
const bodyParser = require(`body-parser`);
const {offersRoute} = require(`./routes/offers`);

const create = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(express.static(`static`));
  app.use(`/api/`, offersRoute);

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
