const { responseWithoutHeader, responseWithHeader } = require('../../../helper/response')
const JWT = require('jsonwebtoken')
const usersModel = require('../models/users')

module.exports = {

  verifyAuthorization: async (req, res, next) => {
    if (req.headers.jwt) {
      const token = req.headers.jwt
      const decode = await JWT.decode(token, { complete: true })
      if (decode !== null) {
        const rulesUsers = await usersModel.readRules(decode.payload.id_users)
        const module = req.path.split('/')[1]
        const controller = req.route.stack[1].name
        const rulesModule = rulesUsers[module]
        const detectRuleAuto = rulesModule[controller]
        if (detectRuleAuto === 1) {
          next()
        } if (detectRuleAuto === 0) {
          responseWithHeader(req, res, 401, {
            message: 'Your account not authorities'
          })
        }
      } else if (decode === null) {
        responseWithoutHeader(res, 401, {
          message: 'Your token is wrong, please login or register'
        })
      }
    } else {
      responseWithoutHeader(res, 401, {
        message: 'Your token is empty, please login or register'
      })
    }

  }

}
