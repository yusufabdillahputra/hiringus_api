const { response } = require('../../../helper/response')
const JWT = require('jsonwebtoken')
const usersModel = require('../models/users')

module.exports = {

  verifyAuthorization: async (req, res, next) => {
    const token = req.headers.jwt
    const id = await JWT.decode(token, { complete: true }).payload.id_users
    const rulesUsers = await usersModel.readRules(id)
    const module = req.path.replace('/', '')
    const controller = req.route.stack[1].name
    const rulesModule = rulesUsers[module]
    const detectRuleAuto = rulesModule[controller]
    if (detectRuleAuto === 1) {
      next()
    } if (detectRuleAuto === 0) {
      response(res, 401, {
        message: 'Your account not authorities'
      })
    }
  }

}
