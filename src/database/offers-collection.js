const {Adapter} = require(`./adapter`);

class OffersCollection extends Adapter {
  constructor() {
    super();
  }

  async setupOffers(database) {
    await this.setup(`mongodb://localhost:27017`, database, `offers`);
  }
}

let offersCollection = new OffersCollection();
offersCollection.setupOffers(`keksbooking`)
    .then(() => {
      console.log(`Offers collection is OK!`);
    })
    .catch((err) => {
      console.error(`Can't setup offers collection!`);
      console.error(err);
      process.exit(1);
    });

module.exports = {
  offersCollection
};
