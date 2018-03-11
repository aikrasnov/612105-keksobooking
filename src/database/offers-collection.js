const {Adapter} = require(`./adapter`);
const {logger} = require(`../logger`);
const {DB_HOST, OFFERS_COLLECTION, DATABASE_PROD} = require(`../../environments`);

class OffersCollection extends Adapter {
  constructor() {
    super();
  }

  async setupOffers(database) {
    await this.setup(DB_HOST, database, OFFERS_COLLECTION);
  }
}

const offersCollection = new OffersCollection();
offersCollection.setupOffers(DATABASE_PROD)
    .then(() => {
      logger.info(`Offers collection is OK!`);
    })
    .catch((err) => {
      logger.error(`Can't setup offers collection!`);
      logger.error(err);
      process.exit(1);
    });

module.exports = {
  offersCollection
};
