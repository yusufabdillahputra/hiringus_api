require('dotenv/config')
const JWT = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const {response} = require('./response')

module.exports = {

  getToken: (res, payload) => {
    const token = JWT.sign(payload, JWT_SECRET_KEY, {
      expiresIn: '24h'
    })
    response(res, 200, token)
  },

  verifyToken: (req, res, next) => {
    const token = req.headers.jwt
    JWT.verify(token, JWT_SECRET_KEY, (error) => {
      if (error && error.name === 'TokenExpiredError') response(res, 401, error)
      if (error && error.name === 'JsonWebTokenError') response(res, 401, error)
      next()
    })
  },

  completeToken: (req, res, next) => {
    const token = req.headers.jwt
    JWT.decode(token, {
      complete: true
    })
    response(res, 200, `${token} JWT is complete`)
    next()
  }

}
