require('dotenv/config')
const JWT = require('jsonwebtoken')
const logModel = require('../app/v1/models/log')

module.exports = {

  response: async (req, res, status, result, log = true) => {
    if (log) {
      const token = req.headers.jwt
      const id = await JWT.decode(token, { complete: true }).payload.id_users
      const dataLog = {
        id_users: id,
        status_log: status,
        module_log: req.path.replace('/', ''),
        controller_log : req.route.stack[1].name,
        description_log : result.message
      }
      await logModel.createData(dataLog)

      const resultResponse = {}
      resultResponse.status = status
      resultResponse.result = result
      return res.status(resultResponse.status).json(resultResponse)
    } else {
      const resultResponse = {}
      resultResponse.status = status
      resultResponse.result = result
      return res.status(resultResponse.status).json(resultResponse)
    }
  },

  dotEnv: (ENV) => {
    return process.env[ENV]
  }

}
