require('dotenv/config')
const JWT = require('jsonwebtoken')
const { axiosPost } = require('./axios')
const usersModel = require(`../app/v${process.env.API_VERSION}/models/users`)

module.exports = {

  responseWithHeader: async (req, res, status, result) => {
    const token = req.headers.jwt
    const decode = await JWT.decode(token, { complete: true })
    if (decode !== null) {
      const rememberToken = await usersModel.readRememberToken(decode.payload.id_users)
      if (rememberToken !== null) {
        if (rememberToken !== token) {
          const resultResponse = {}
          resultResponse.status = 406
          resultResponse.result = 'Your token is not acceptable'
          return res.status(resultResponse.status).json(resultResponse)
        }
        if (rememberToken === token) {
          const dataLog = {
            id_users: decode.payload.id_users,
            status_log: status,
            module_log: req.path.split('/')[1],
            controller_log: req.route.stack[1].name,
            description_log: result.message
          }
          await axiosPost('/log', dataLog)

          const resultResponse = {}
          resultResponse.status = status
          resultResponse.result = result
          return res.status(resultResponse.status).json(resultResponse)
        }
      } else {
        const resultResponse = {}
        resultResponse.status = 401
        resultResponse.result = 'Your token is not authorized'
        return res.status(resultResponse.status).json(resultResponse)
      }
    } if (decode === null) {
      const resultResponse = {}
      resultResponse.status = 402
      resultResponse.result = 'Your token is not authorized'
      return res.status(resultResponse.status).json(resultResponse)
    }
  },
  responseWithoutHeader: (res, status, result) => {
    const resultResponse = {}
    resultResponse.status = status
    resultResponse.result = result
    return res.status(resultResponse.status).json(resultResponse)
  },
  dotEnv: (ENV) => {
    return process.env[ENV]
  }

}
