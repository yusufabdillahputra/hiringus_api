const { response } = require('../../../helper/response')
const engineerModel = require('../models/engineer')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await engineerModel.createData(req.body)
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readAll: async (req, res) => {
    try {
      const result = await engineerModel.readAll()
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readById: async (req, res) => {
    try {
      const result = await engineerModel.readById(req.params)
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readByName: async (req, res) => {
    try {
      const result = await engineerModel.readByName(req.params)
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readByCompany: async (req, res) => {
    try {
      const result = await engineerModel.readByCompany(req.params)
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readTrash: async (req, res) => {
    try {
      const result = await engineerModel.readTrash()
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  updateById: async (req, res) => {
    try {
      const result = await engineerModel.updateById(req.body, req.params)
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  deleteDataById: async (req, res) => {
    try {
      const result = await engineerModel.deleteDataById(req.params)
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  softDeleteDataById: async (req, res) => {
    try {
      const result = await engineerModel.softDeleteDataById()
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readAllSortByName: async (req, res) => {
    try {
      const result = await engineerModel.readAllSortBy('name_engineer')
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readAllSortBySkill: async (req, res) => {
    try {
      const result = await engineerModel.readAllSortByBodySkill('name_skill')
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  },

  readAllSortByUpdatedAt: async (req, res) => {
    try {
      const result = await engineerModel.readAllSortBy('updated_at')
      response(req, res, 200, result)
    } catch (error) {
      console.log(error)
      response(req, res, 500, error)
    }
  }

}
