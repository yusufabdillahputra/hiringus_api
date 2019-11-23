const Router = require('express').Router()
const controller = 'home'
const { landing } = require(`../controllers/${controller}`)

Router
  .get('/', landing)

module.exports = Router
