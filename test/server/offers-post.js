const request = require(`supertest`);
const {assert} = require(`chai`);
const {create} = require(`../../src/server/server`);
const {VALIDATE_ERRORS} = require(`../../src/constants`);

let app;
let changeOffersDatabase;

describe(`tests for offer route (only POST)`, () => {

  before(() => {
    ({app, changeOffersDatabase} = create());
    return changeOffersDatabase(`test`);
  });

  describe(`POST /api/offers`, () => {

    let res;

    it(`should have answer`, async () => {
      res = await request(app).post(`/api/offers/`)
          .field(`title`, `lolololollolololollolololollolololollolololollolololollol`)
          .field(`address`, `123, 123`)
          .field(`type`, `bungalo`)
          .field(`price`, 100)
          .field(`checkin`, `12:00`)
          .field(`checkout`, `12:00`)
          .field(`rooms`, 1)
          .field(`date`, 123);

      assert(res.statusCode === 200);
    });

    it(`should have content-type`, () => {
      assert(res.headers[`content-type`] === `application/json; charset=utf-8`);
    });

    it(`should have content-length`, () => {
      assert(res.headers[`content-length`]);
    });


  });

  describe(`POST /api/offers/ validation`, () => {

    let res;

    it(`should have answer`, async () => {
      res = await request(app).post(`/api/offers`)
          .field(`title`, `l`)
          .field(`address`, ``)
          .field(`type`, `bungalo1`)
          .field(`price`, 0)
          .field(`checkin`, `12:001`)
          .field(`checkout`, `12:010`)
          .field(`rooms`, `1`);

      assert(res.statusCode === 400);
    });

    it(`should have collection of validation error`, () => {
      assert.deepEqual(res.body, VALIDATE_ERRORS);
    });


  });

});
