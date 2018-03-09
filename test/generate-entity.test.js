const {generateEntity} = require(`../src/offer-mock`);
const {DATA} = require(`../src/constants`);
const {expect} = require(`chai`);

describe(`generateEntity function`, () => {

  let result;

  it(`result should be object`, () => {
    result = generateEntity();

    expect(result).to.be.an.instanceof(Object);
  });

  describe(`author`, () => {

    it(`author should be object`, () => {
      expect(result.author).to.be.an.instanceof(Object);
    });

    it(`author should have avatar`, () => {
      expect(result.author.avatar).to.match(/^https:\/\/robohash.org\/\w+$/);
    });

    it(`author should name`, () => {
      expect(result.author.name).to.oneOf(DATA.NAMES);
    });

  });

  describe(`location`, () => {

    it(`should have x`, () => {
      expect(result.location.x).to.be.within(300, 900);
    });

    it(`should have y`, () => {
      expect(result.location.y).to.be.within(150, 500);
    });
  });

  describe(`offer`, () => {

    it(`offer should be object`, () => {
      expect(result.offer).to.be.an.instanceof(Object);
    });

    it(`offer should have title`, () => {
      expect(result.offer.title).to.be.oneOf(DATA.TITLES);
    });

    it(`title should have length between 30 and 140`, () => {
      expect(result.offer.title.length).to.be.within(30, 140);
    });

    it(`offer should have address`, () => {
      const address = `${result.location.x}, ${result.location.y}`;

      expect(result.offer.address).to.be.equal(address);
    });

    it(`offer should have type`, () => {
      expect(result.offer.type).to.be.oneOf(DATA.TYPES);
    });

    it(`offer should have rooms`, () => {
      expect(result.offer.rooms).to.be.within(1, 5);
    });

    it(`quests should be >= 0`, () => {
      expect(result.offer.guests).to.be.at.least(0);
    });

    it(`offer should have checkin`, () => {
      expect(result.offer.checkin).to.be.oneOf(DATA.CHECKINS);
    });

    it(`offer should have checkout`, () => {
      expect(result.offer.checkout).to.be.oneOf(DATA.CHECKOUTS);
    });

    it(`offer should have features`, () => {
      expect(result.offer.features).to.be.an.instanceof(Array);
    });

    it(`each feature should be one of`, () => {
      for (const feature of result.offer.features) {
        expect(feature).to.be.oneOf(DATA.FEATURES);
      }
    });

    it(`each feature should be unique`, () => {
      expect(result.offer.features.length).to.be.equal(new Set(result.offer.features).size);
    });

    it(`offer should have description`, () => {
      expect(result.offer.description).to.be.equal(``);
    });

    it(`offer should have photos`, () => {
      expect(result.offer.photos).to.be.an.instanceof(Array);
    });

    it(`each photo should be link`, () => {
      expect(result.offer.photos.sort()).to.be.eql(DATA.PHOTOS.sort());
    });
  });
});
