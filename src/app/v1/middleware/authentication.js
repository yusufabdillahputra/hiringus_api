const { responseWithoutHeader } = require('../../../helper/response')
const jwtHelper = require('../../../helper/jwt')
const JWT = require('jsonwebtoken')
const usersModel = require('../models/users')

module.exports = {

  verifyToken: async (req, res, next) => {
    if (req.headers.jwt) {
      const token = req.get('jwt')
      const decode = await JWT.decode(token, { complete: true })
      if (decode !== null) {
        const rememberToken = await usersModel.readRememberToken(decode.payload.id_users)
        if (rememberToken !== null) {
          if (rememberToken !== token) {
            responseWithoutHeader(res, 406, 'Your token is not acceptable')
          } if (rememberToken === token) {
            await jwtHelper.verifyToken(req, res, next)
          }
        } else {
          responseWithoutHeader(res, 401, 'Your token is not authorized')
        }
      } else if (decode === null) {
        responseWithoutHeader(res, 401, {
          message: 'Your token is wrong, please login or register'
        })
      }
    } else {
      responseWithoutHeader(res, 401, 'Your token is empty, please login or register')
    }
  }

}
