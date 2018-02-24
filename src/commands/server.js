/**
 * Запустить сервер с переданными параметрами
 * @param {Object} server
 */
const run = (server) => {

  let port = server.value || `3000`;
  console.log(`Run server on ${port} port`);
  process.exit(0);

};

module.exports = {
  name: `server`,
  description: `запустить сервер`,
  execute: run
};
