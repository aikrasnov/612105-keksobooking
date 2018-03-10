const {offersCollection} = require(`../../../database/offers-collection`);
const {imageBacket} = require(`../../../database/image-store`);
const {OFFERS_SCHEME} = require(`./scheme/offers-scheme`);
const {validator} = require(`../../middleware/validator`);
const {Router} = require(`express`);
const {asyncHandler} = require(`../../util`);
const multer = require(`multer`);
const {Duplex} = require(`stream`);
const {normalizeOffer} = require(`./normalize-offer`);

const offersRoute = new Router();
const upload = multer({storage: multer.memoryStorage()});

offersRoute.get(`/offers`, asyncHandler(async (req, res) => {

  const limit = Number(req.query.limit) || 20;
  const skip = Number(req.query.skip) || 0;

  res.send((await offersCollection.collection.find().skip(skip).limit(limit).toArray()));
}));

offersRoute.post(`/offers`, upload.single(`avatar`), validator(OFFERS_SCHEME), asyncHandler(async (req, res) => {

  const answer = normalizeOffer(req.body);
  const result = await offersCollection.collection.insert(answer);
  const avatarId = result.ops[0]._id;

  const avatar = req.file;

  if (avatar) {
    answer.author = {};
    answer.author.avatar = avatarId;
    const writableStream = await imageBacket.backet.openUploadStream(avatarId);
    const stream = new Duplex();
    stream.push(avatar.buffer);
    stream.push(null);
    stream.on(`end`, async () => {
      await offersCollection.collection.update({_id: avatarId}, {$set: {author: answer.author}});
      res.send(answer);
    });
    stream.pipe(writableStream);
  } else {
    res.send(answer);
  }
}));

offersRoute.get(`/offers/:date`, asyncHandler(async (req, res) => {
  const {date} = req.params;

  let [entity] = await offersCollection.collection.find({date}).toArray();
  if (entity) {
    res.send(entity);
    return;
  }

  res.status(404).send({error: `Not Found`, errorMessages: `offer with date "${date}" not found`});
}));

offersRoute.get(`/offers/:date/avatar`, asyncHandler(async (req, res) => {
  const {date} = req.params;

  let [entity] = await offersCollection.collection.find({date}).toArray();
  if (!entity) {
    res.status(400).send({error: `Bad Request`, errorMessages: `offer with date "${date}" not exist`});
    return;
  }

  const images = await imageBacket.backet.find({filename: entity._id}).toArray();
  if (images.length === 0) {
    res.status(404).send({error: `Not Found`, errorMessages: `offer doesn't have an avatar`});
    return;
  }

  await imageBacket.backet.openDownloadStreamByName(entity._id).pipe(res);
}));

offersRoute.all(`/offers`, (req, res) => {
  res.status(501).send({error: `Internal Error`, errorMessages: `Method not implemented`});
});

const changeOffersDatabase = async (database) => {

  await offersCollection.terminate();
  await imageBacket.terminate();
  return Promise.all([
    imageBacket.setupImages(database),
    offersCollection.setupOffers(database)
  ]);
};

module.exports = {
  offersRoute,
  changeOffersDatabase
};
