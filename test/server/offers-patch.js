const request = require(`supertest`);
const {assert} = require(`chai`);
const {create} = require(`../../src/server/server`);
const {DATABASE_TEST} = require(`../../environments`);

let app;
let changeOffersDatabase;

describe(`tests for offer route (only PATCH)`, () => {

  before(() => {
    ({app, changeOffersDatabase} = create());
    return changeOffersDatabase(DATABASE_TEST);
  });

  describe(`PATCH /api/offers`, () => {

    it(`should have code 501`, async () => {
      const res = await request(app).patch(`/api/offers/`);

      assert(res.statusCode = 501);
    });
  });
});
