const path = require('../config/path')
const Router = require('express').Router()
const controller = 'home'
const { get } = require(`${path}/controllers/${controller}`)

Router
  .get('/', get)

module.exports = Router
