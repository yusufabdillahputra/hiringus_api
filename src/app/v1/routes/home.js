const Router = require('express').Router()
const controller = 'home'
const { get } = require(`../controllers/${controller}`)

Router
  .get('/', get)

module.exports = Router
