const { response } = require('../../../helper/response')
const companyModel = require('../models/company')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await companyModel.createData(req.body)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await companyModel.readAll()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await companyModel.readById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await companyModel.readByName(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await companyModel.readTrash()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await companyModel.updateById(req.body, req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await companyModel.deleteDataById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await companyModel.softDeleteDataById()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}