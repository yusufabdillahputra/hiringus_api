const { responseWithoutHeader, responseWithHeader, dotEnv } = require('../../../helper/response')
const { axiosPost } = require('../../../helper/axios')
const usersModel = require('../models/users')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await usersModel.createData(req.body)
      const privileged = await usersModel.readPrivileged(result.insertId)
      if (privileged[0].access_users === 1) {
        const rules = await usersModel.createRules(privileged[0].id_users, dotEnv('RULES_ROOT'))

        const dataLog = {
          id_users: privileged[0].id_users,
          status_log: 200,
          module_log: 'users',
          controller_log: 'createData',
          description_log: 'Success'
        }
        await axiosPost('/log', dataLog)

        responseWithoutHeader(res, 200, {
          result: result,
          privileged: privileged,
          rules: rules
        })
      } if (privileged[0].access_users === 2) {
        const rules = await usersModel.createRules(privileged[0].id_users, dotEnv('RULES_ADMIN'))

        const dataLog = {
          id_users: privileged[0].id_users,
          status_log: 200,
          module_log: 'users',
          controller_log: 'createData',
          description_log: 'Success'
        }
        await axiosPost('/log', dataLog)

        responseWithoutHeader(res, 200, {
          result: result,
          privileged: privileged,
          rules: rules
        })
      } if (privileged[0].access_users === 3) {
        const rules = await usersModel.createRules(privileged[0].id_users, dotEnv('RULES_PARTNER'))

        const dataLog = {
          id_users: privileged[0].id_users,
          status_log: 200,
          module_log: 'users',
          controller_log: 'createData',
          description_log: 'Success'
        }
        await axiosPost('/log', dataLog)

        responseWithoutHeader(res, 200, {
          result: result,
          privileged: privileged,
          rules: rules
        })
      }
      responseWithoutHeader(res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithoutHeader(res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await usersModel.readAll(req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await usersModel.readById(req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await usersModel.readByName(req.params, req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readByCompany: async (req, res) => {
    try {
      const result = await usersModel.readByCompany(req.params, req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await usersModel.readTrash()
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await usersModel.updateById(req.body, req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await usersModel.deleteDataById(req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await usersModel.softDeleteDataById()
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  }

}
