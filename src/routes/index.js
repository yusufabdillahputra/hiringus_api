const Router = require('express').Router()

const home = require('./home')
const users = require('./users')
const company = require('./company')

Router
  .use('/', home)
  .use('/', users)
  .use('/', company)

module.exports = Router
