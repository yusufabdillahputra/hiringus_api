const { response } = require('../../../helper/response')
const jwtHelper = require('../../../helper/jwt')
const JWT = require('jsonwebtoken')
const usersModel = require('../models/users')

module.exports = {

  verifyToken: async (req, res, next) => {
    if (req.headers.jwt) {
      const token = req.headers.jwt
      const id = await JWT.decode(token, { complete: true }).payload.id_users
      const rememberToken = await usersModel.readRememberToken(id)
      if (rememberToken !== null) {
        if (rememberToken !== token) {
          response(req, res, 406, 'Your token is not acceptable')
        } if (rememberToken === token) {
          await jwtHelper.verifyToken(req, res, next)
        }
      } else {
        response(req, res, 401, 'Your token is not authorized')
      }
    } else {
      response(req, res, 401, 'Your token is empty, please login or register')
    }
  }

}
