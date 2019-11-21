const JWT = require('jsonwebtoken')
const { response } = require('../../../helper/response')
const jwtHelper = require('../../../helper/jwt')
const bcrypt = require('bcrypt')
const usersController = require('../controllers/users')
const usersModel = require('../models/users')

module.exports = {

  signIn: async (req, res) => {
    try {
      const account = await usersModel.readByLogin(req.body)
      const countAccount = Object.keys(account).length
      if (countAccount > 0) {
        bcrypt.compare(req.body.password_users, account[0].password_users, async (error, result) => {
          if (error) response(res, 401, error)
          if (result) {
            const payload = {
              id_users: account[0].id_users,
              username_users: account[0].username_users,
              name_users: account[0].name_users,
              access_users: account[0].access_users
            }
            const token = await jwtHelper.getToken(res, payload)
            const model = await usersModel.createRememberToken(token, payload.id_users)
            response(res, 200, {
              token: token,
              model: model
            })
          } else {
            response(res, 401, 'Account passwords wrong')
          }
        })
      }
      if (countAccount === 0 || countAccount === null) {
        response(res, 401, 'Account not register yet')
      }
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  signUp: async (req, res) => {
    await usersController.createData(req, res)
  },

  signOut: async (req, res) => {
    try {
      const token = req.headers.jwt
      const id = await JWT.decode(token, { complete: true }).payload.id_users
      const model = await usersModel.destroyRememberToken(id)
      response(res, 200, {
        model: model,
        message: 'Succesfully destroy JWT and logout'
      })
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}
