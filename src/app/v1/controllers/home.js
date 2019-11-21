const { response } = require('../../../helper/response')
const homeModel = require('../models/home')

module.exports = {

  get: async (req, res) => {
    try {
      const result = await homeModel.get('Selamat Datang Yusuf Abdillah Putra')
      response(req, res, 200, result, false)
    } catch (error) {
      response(req, res, 500, error, false)
    }
  }

}
