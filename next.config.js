const path = require("path");
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_KEY: process.env.API_KEY,
    SERVICE_URL: process.env.SERVICE_URL,
    ENV_ID: process.env.ENV_ID,
    COLLECTION_ID: process.env.COLLECTION_ID,
  },
};
