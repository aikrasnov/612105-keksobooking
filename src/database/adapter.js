const {MongoClient, GridFSBucket} = require(`mongodb`);

class Adapter {

  constructor() {
    this.mongoClient = MongoClient;
    this.GridBacket = GridFSBucket;
  }

  async setup(url, database, collection) {
    this.client = await this.mongoClient.connect(url);
    this.db = await this.client.db(database);

    if (collection) {
      this.collection = (await this.db).collection(collection);
    }

    this.isConnected = true;
    return this;
  }

  async terminate() {
    if (this.isConnected) {
      await this.client.close(true);
    }
  }

}

module.exports = {
  Adapter
};
