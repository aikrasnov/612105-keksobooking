const {run} = require(`../../server/server`);
const {SERVER_PORT} = require(`../../../environments`);

/**
 * Запустить сервер с переданными параметрами
 * @param {Object} server
 */
const runServer = (server) => {

  const port = server.value || SERVER_PORT;
  run(port);

};

module.exports = {
  name: `server`,
  description: `запустить сервер`,
  execute: runServer
};
