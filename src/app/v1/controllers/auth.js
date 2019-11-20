const { response } = require('../../../helper/response')
const JWT = require('../../../helper/jwt')
const usersController = require('../controllers/users')
const usersModel = require('../models/users')

module.exports = {

  signIn: async (req, res) => {
    try {
      const account = await usersModel.readByLogin(req.body)
      if (account.length > 0) JWT.getToken(res, { id_users: 1, username_users: 'yusuf', access_users: '1' })
      if (account.length === 0) response(res, 401, 'Account not register yet')
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  signUp: (req, res) => {
    usersController.createData(req, res)
  },

  signOut: (req, res) => {
    try {
      JWT.completeToken(req, res)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}
