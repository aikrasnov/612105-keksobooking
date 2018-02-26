class Store {

  constructor() {
    this._store = {};
  }

  put(key, data) {
    this._store[key] = data;
  }

  get(key) {
    return this._store[key];
  }

  getAll() {
    const result = [];
    for (const key of Object.keys(this._store)) {
      result.push(this._store[key]);
    }

    return result;
  }
}

const store = new Store();
module.exports = {
  store
};
