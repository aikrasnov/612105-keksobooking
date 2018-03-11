const {Adapter} = require(`./adapter`);
const {logger} = require(`../logger`);
const {DB_HOST, AVATARS_BACKET, DATABASE_PROD} = require(`../../environments`);

class ImageBacket extends Adapter {
  constructor() {
    super();
  }

  async setupImages(database) {
    await this.setup(DB_HOST, database);
    this.backet = new this.GridBacket(this.db, {
      chunkSizeBytes: 1024 * 1024,
      bucket: AVATARS_BACKET
    });
  }
}

let imageBacket = new ImageBacket();
imageBacket.setupImages(DATABASE_PROD)
    .then(() => {
      logger.info(`Image backet is OK!`);
    })
    .catch((err) => {
      logger.error(`Can't setup image backet!`);
      logger.error(err);
      process.exit(1);
    });

module.exports = {
  imageBacket
};
