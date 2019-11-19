const Router = require('express').Router()

const home = require('./home')
const users = require('./users')

Router
  .use('/', home)
  .use('/', users)

module.exports = Router
