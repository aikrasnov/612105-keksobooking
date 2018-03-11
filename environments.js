require(`dotenv`).config();

module.exports = {
  DB_HOST: process.env.DB_HOST || `mongodb://localhost:27017`,
  DATABASE_PROD: process.env.DATABASE_PROD || `keksbooking`,
  DATABASE_TEST: process.env.DATABASE_TEST || `keksbooking_test`,
  OFFERS_COLLECTION: process.env.OFFERS_COLLECTION || `offers`,
  AVATARS_BACKET: process.env.AVATARS_BACKET || `avatars`,
  SERVER_PORT: process.env.SERVER_PORT || `3000`,
  SERVER_LOG_LEVEL: process.env.SERVER_LOG_LEVEL || `info`
};
