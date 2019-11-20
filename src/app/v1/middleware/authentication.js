const JWT = require('../../../helper/jwt')
// const userModel = require('../models/users')

module.exports = {

  verifyToken: (req, res, next) => {
    JWT.verifyToken(req, res, next)
  }

}
