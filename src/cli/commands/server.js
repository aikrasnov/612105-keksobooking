const {run} = require(`../../server/server`);

/**
 * Запустить сервер с переданными параметрами
 * @param {Object} server
 */
const runServer = (server) => {

  let port = server.value || `3000`;
  run(port);

};

module.exports = {
  name: `server`,
  description: `запустить сервер`,
  execute: runServer
};
