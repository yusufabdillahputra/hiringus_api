require('dotenv/config')

module.exports = {

  response: (res, status, resultModel) => {
    const result = {}
    if (status === 200) {
      result.status = status
      result.data = resultModel
    } if (status === 500) {
      result.status = status
      result.message = resultModel
    } if (status === 401) {
      result.status = status
      result.message = resultModel
    } if (status === 400) {
      result.status = status
      result.message = resultModel
    } if (status === 403) {
      result.status = status
      result.message = resultModel
    } if (status === 406) {
      result.status = status
      result.message = resultModel
    }
    return res.status(result.status).json(result)
  },

  dotEnv: (ENV) => {
    return process.env[ENV]
  }

}
