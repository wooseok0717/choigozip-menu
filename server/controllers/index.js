const axios = require('axios');
require('dotenv').config();
const baseURL = process.env.baseURL;

module.exports = {
  getCategories: (req, res) => {
    axios.get(`${baseURL}/api/getCategories`)
    .then(({data}) => res.send(data))
  },
  loadMenuList: (req, res) => {
    axios.get(`${baseURL}/api/menuList/?id=${req.query.id}`)
    .then(({data}) => res.send(data));
  },
  loadPromos: (req, res) => {
    axios.get(`${baseURL}/api/promos`)
    .then(({data}) => res.send(data));
  }
}