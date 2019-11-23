const { responseWithoutHeader } = require('../../../helper/response')
const { axiosGet } = require('../../../helper/axios')

module.exports = {

  landing: async (req, res) => {
    try {
      const axiosLogHome = await axiosGet('/')
      responseWithoutHeader(res, axiosLogHome.data.status, {
        serviceApi: 'stable',
        serviceLog: axiosLogHome.data.result
      })
    } catch (error) {
      responseWithoutHeader(res, 500, error)
    }
  }

}
