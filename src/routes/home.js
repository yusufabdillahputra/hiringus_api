const path = require('../config/path')
const Router = require('express').Router()

const { get } = require(`${path}/controllers/home`)

Router
  .get('/home', get)

module.exports = Router
