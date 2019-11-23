require('dotenv/config')
const axios = require('axios')
const instance = axios.create({
  baseURL: process.env.URL_LOG
})

module.exports = {

  axiosGet: (url) => {
    return instance.get(url)
  },

  axiosPost: (url, body) => {
    return instance.post(url, body)
  }

}
