const JWT = require('../../../helper/jwt')

module.exports = {

  verifyToken: (req, res, next) => {
    JWT.verifyToken(req, res, next)
  }

}
