import axios from "axios";

export default axios.create({
  baseURL: process.env.API_BASEURL, // Enter url of cms server here
});
