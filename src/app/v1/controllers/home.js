const { response } = require('../../../helper/response')
const homeModel = require('../models/home')

module.exports = {

  get: async (req, res) => {
    try {
      const result = await homeModel.get('Selamat Datang Yusuf Abdillah Putra')
      response(res, 200, result)
    } catch (error) {
      response(res, 500, error)
    }
  }

}
