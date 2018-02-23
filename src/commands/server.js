const http = require(`http`);
const url = require(`url`);
const path = require(`path`);
const {FILE_TYPES} = require(`../constants`);
const {readFile} = require(`../utils`);

const run = (args) => {

  const arg = (args.filter((el) => el.match(/server/)))[0];
  let port;

  if (arg.match(/=/)) {
    [port] = arg.match(/\d+/);
  } else {
    port = 3000;
  }

  const server = http.createServer((req, res) => {
    const {pathname} = url.parse(req.url);

    (async () => {
      const resource = `./static${pathname}`;
      let fileType = path.extname(resource).replace(/^\./, ``);

      try {

        if (pathname === `/`) {
          res.setHeader(`content-type`, FILE_TYPES.html);
          res.end(await readFile(`./static/index.html`));
        } else {
          res.setHeader(`content-type`, FILE_TYPES[fileType] || `text/plain`);
          const file = await readFile(resource);
          res.end(file);
        }

      } catch (err) {

        if (err.code === `ENOENT`) {
          res.statusCode = 404;
          res.end(`Not Found`);
        } else {
          throw err;
        }

      }
    })().catch((err) => {
      console.error(err);
      res.statusCode = 500;
      res.end(`Internal Error`);
    });

  });

  server.listen(port, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Сервер запущен на ${port} порту`);
  });


};

module.exports = {
  name: `server`,
  description: `запустить сервер`,
  execute: run
};
