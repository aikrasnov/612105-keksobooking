/* eslint-disable max-nested-callbacks */
const request = require(`supertest`);
const {assert} = require(`chai`);
const {create} = require(`../../src/server/server`);

let app;
let changeOffersDatabase;

describe(`tests for offer route (only GET)`, () => {

  before(() => {
    ({app, changeOffersDatabase} = create());
    return changeOffersDatabase(`test`);
  });

  describe(`GET /api/offers`, () => {

    let res;

    it(`should have answer`, async () => {
      res = await request(app).get(`/api/offers/`);

      assert(res.statusCode === 200);
    });

    it(`should have content-type`, () => {
      assert(res.headers[`content-type`] === `application/json; charset=utf-8`);
    });

    it(`should have content-length`, () => {
      assert(res.headers[`content-length`]);
    });

    it(`should have data`, () => {
      assert(Object.keys(res.body) !== 0);
    });

  });

  describe(`GET /api/offers/:date`, () => {

    let res;

    describe(`date exist`, () => {
      it(`should have answer`, async () => {
        res = await request(app).get(`/api/offers/123`);

        assert(res.statusCode === 200);
      });

      it(`should have content-type`, () => {
        assert(res.headers[`content-type`] === `application/json; charset=utf-8`);
      });

      it(`should have content-length`, () => {
        assert(res.headers[`content-length`]);
      });

      it(`should have answer with requested date`, () => {
        assert(res.body.date === `123`);
      });
    });

    describe(`date not exist`, () => {

      it(`should have status code 404`, async () => {
        res = await request(app).get(`/api/offers/1`);

        assert(res.statusCode === 404);
      });

    });
  });
});

