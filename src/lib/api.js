import axios from "axios";

const instance = axios.create({
  defaultURL: `http://10.0.2.2:1337/api/`,
});
const Url = instance.defaults.defaultURL;
const API = {
  Url: Url,
  UrlImage: "http://10.0.2.2:1337",
  login: `${Url}auth/local`,
  register: `${Url}auth/local/register`,
  products: `${Url}products`,
};
export default API;
