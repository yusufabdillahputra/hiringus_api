const { responseWithHeader } = require('../../../helper/response')
const companyModel = require('../models/company')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await companyModel.createData(req.body)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await companyModel.readAll(req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await companyModel.readById(req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await companyModel.readByName(req.params, req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await companyModel.readTrash()
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await companyModel.updateById(req.body, req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await companyModel.deleteDataById(req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await companyModel.softDeleteDataById()
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  }

}
