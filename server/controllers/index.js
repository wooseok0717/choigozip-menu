const axios = require('axios');
// const baseUrl = 'http://127.0.0.1:8080';
const baseUrl = 'http://3.101.130.150:3000';

module.exports = {
  getCategories: (req, res) => {
    axios.get(`${baseUrl}/api/getCategories`)
    .then(({data}) => res.send(data))
  },
  loadMenuList: (req, res) => {
    axios.get(`${baseUrl}/api/menuList/?id=${req.query.id}`)
    .then(({data}) => res.send(data));
  }
}