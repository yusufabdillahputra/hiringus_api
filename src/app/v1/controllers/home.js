const { responseWithoutHeader } = require('../../../helper/response')
const homeModel = require('../models/home')

module.exports = {

  get: async (req, res) => {
    try {
      const result = await homeModel.get('Selamat Datang Yusuf Abdillah Putra')
      responseWithoutHeader(res, 200, result)
    } catch (error) {
      responseWithoutHeader(res, 500, error)
    }
  }

}
