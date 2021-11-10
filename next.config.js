import dotenv from "dotenv";
dotenv.config();

module.exports = {
  swcMinify: true,
  env: {
    API_BASEURL: process.env.API_BASEURL,
  },
};
