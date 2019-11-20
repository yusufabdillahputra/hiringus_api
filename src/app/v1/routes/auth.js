const Router = require('express').Router()
const controller = 'auth'
const {
  signIn,
  signUp,
  signOut
} = require(`../controllers/${controller}`)

Router
  .get(`/${controller}/login`, signIn)
  .post(`/${controller}/register`, signUp)
  .post(`/${controller}/logout`, signOut)

module.exports = Router
