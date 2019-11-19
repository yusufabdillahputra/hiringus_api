const Router = require('express').Router()

const home = require('./home')

Router
  .use('/', home)

module.exports = Router
