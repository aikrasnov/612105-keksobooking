const {Adapter} = require(`./adapter`);

class ImageBacket extends Adapter {
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

let imageBacket = new ImageBacket();
imageBacket.setupImages(`keksbooking`)
    .then(() => {
      console.log(`Image backet is OK!`);
    })
    .catch((err) => {
      console.error(`Can't setup image backet!`);
      console.error(err);
      process.exit(1);
    });

module.exports = {
  imageBacket
};
