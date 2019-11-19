const { response } = require('../../../helper/response')
const skillModel = require('../models/skill')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await skillModel.createData(req.body)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await skillModel.readAll()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await skillModel.readById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await skillModel.readByName(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await skillModel.readTrash()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await skillModel.updateById(req.body, req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await skillModel.deleteDataById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await skillModel.softDeleteDataById()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}
