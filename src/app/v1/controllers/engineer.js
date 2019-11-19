const { response } = require('../../../helper/response')
const engineerModel = require('../models/engineer')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await engineerModel.createData(req.body)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await engineerModel.readAll()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await engineerModel.readById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await engineerModel.readByName(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readByCompany: async (req, res) => {
    try {
      const result = await engineerModel.readByCompany(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await engineerModel.readTrash()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await engineerModel.updateById(req.body, req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await engineerModel.deleteDataById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await engineerModel.softDeleteDataById()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}
