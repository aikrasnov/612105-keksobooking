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
    return Object.values(this._store);
  }
}

const store = new Store();
module.exports = {
  store
};
