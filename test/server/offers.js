const request = require(`supertest`);
const {assert} = require(`chai`);
const {create} = require(`../../src/server/server`);
const {generateEntity} = require(`../../src/generate-entity`);
const {INVALID_DATA, VALIDATE_ERRORS} = require(`../../src/constants`);

const app = create();
const data = generateEntity();

describe(`POST /api/offers`, () => {

  let res;

  it(`should have answer`, async () => {
    res = await request(app).post(`/api/offers/`).send(data);

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
    res = await request(app).post(`/api/offers`).send(INVALID_DATA);

    assert(res.statusCode === 400);
  });

  it(`should have collection of validation error`, () => {
    assert.deepEqual(res.body, VALIDATE_ERRORS);
  });


});

describe(`PATCH /api/offers`, () => {

  it(`should have code 501`, async () => {
    const res = await request(app).patch(`/api/offers/`);

    assert(res.statusCode = 501);
  });
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
    assert.deepEqual(res.body, [data]);
  });

});

describe(`GET /api/offers/:date`, () => {

  let res;

  describe(`date exist`, () => {
    it(`should have answer`, async () => {
      res = await request(app).get(`/api/offers/${data.date}`);

      assert(res.statusCode === 200);
    });

    it(`should have content-type`, () => {
      assert(res.headers[`content-type`] === `application/json; charset=utf-8`);
    });

    it(`should have content-length`, () => {
      assert(res.headers[`content-length`]);
    });

    it(`should have answer with requested date`, () => {
      assert(res.body.date === data.date);
    });
  });

  describe(`date not exist`, () => {

    it(`should have status code 404`, async () => {
      res = await request(app).get(`/api/offers/1`);

      assert(res.statusCode === 404);
    });

  });
});
