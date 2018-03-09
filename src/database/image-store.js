const {Adapter} = require(`./adapter`);

class ImageCollection extends Adapter {
  constructor() {
    super();
  }

  async setupImages(database) {
    await this.setup(`mongodb://localhost:27017`, database);
    this.backet = new this.GridBacket(this.db, {
      chunkSizeBytes: 1024 * 1024,
      bucket: `avatars`
    });
  }
}

let imageCollection = new ImageCollection();
imageCollection.setupImages(`keksbooking`)
    .then(() => {
      console.log(`Image collection is OK!`);
    })
    .catch((err) => {
      console.error(`Can't setup image collection!`);
      console.error(err);
      process.exit(1);
    });

module.exports = {
  imageCollection
};
