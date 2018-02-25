const express = require(`express`);
const {offersRoute} = require(`./routes/offers`);

const run = (port) => {
  const app = express();

  app.use(express.static(`static`));
  app.use(`/api/`, offersRoute);
  app.listen(port, () => {
    console.log(`run server on ${port}`);
  });
};


module.exports = {
  run
};
