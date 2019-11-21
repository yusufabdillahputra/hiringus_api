const { response } = require('../../../helper/response')
const jwtHelper = require('../../../helper/jwt')
const JWT = require('jsonwebtoken')
const usersModel = require('../models/users')

module.exports = {

  verifyToken: async (req, res, next) => {
    const token = req.headers.jwt
    const id = await JWT.decode(token, { complete: true }).payload.id_users
    const rememberToken = await usersModel.readRememberToken(id)
    if (rememberToken !== null) {
      if (rememberToken !== token) {
        response(res, 406, 'Your token is not acceptable')
      } if (rememberToken === token) {
        await jwtHelper.verifyToken(req, res, next)
      }
    } else {
      response(res, 401, 'Your token is not authorized')
    }
  }

}
