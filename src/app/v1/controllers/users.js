const { response, dotEnv } = require('../../../helper/response')
const usersModel = require('../models/users')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await usersModel.createData(req.body)
      const privileged = await usersModel.readPrivileged(result.insertId)
      if (privileged[0].access_users === 1) {
        const rules = await usersModel.createRules(privileged[0].id_users, dotEnv('RULES_ROOT'))
        response(res, 200, {
          result: result,
          privileged: privileged,
          rules: rules
        })
      } if (privileged[0].access_users === 2) {
        const rules = await usersModel.createRules(privileged[0].id_users, dotEnv('RULES_ADMIN'))
        response(res, 200, {
          result: result,
          privileged: privileged,
          rules: rules
        })
      } if (privileged[0].access_users === 3) {
        const rules = await usersModel.createRules(privileged[0].id_users, dotEnv('RULES_PARTNER'))
        response(res, 200, {
          result: result,
          privileged: privileged,
          rules: rules
        })
      }
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await usersModel.readAll()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await usersModel.readById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await usersModel.readByName(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readByCompany: async (req, res) => {
    try {
      const result = await usersModel.readByCompany(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await usersModel.readTrash()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await usersModel.updateById(req.body, req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await usersModel.deleteDataById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await usersModel.softDeleteDataById()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}
