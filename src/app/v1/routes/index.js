const Router = require('express').Router()

const home = require('./home')
const users = require('./users')
const company = require('./company')
const engineer = require('./engineer')
const skill = require('./skill')
const auth = require('./auth')

Router
  .use('/', auth)
  .use('/', home)
  .use('/', users)
  .use('/', company)
  .use('/', engineer)
  .use('/', skill)

module.exports = Router
