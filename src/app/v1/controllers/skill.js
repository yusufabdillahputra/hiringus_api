const { response } = require('../../../helper/response')
const skillHeaderModel = require('../models/skillHeader')
const skillBodyModel = require('../models/skillBody')

module.exports = {

  createHeaderData: async (req, res) => {
    try {
      const result = await skillHeaderModel.createData(req.body)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readHeaderAll: async (req, res) => {
    try {
      const result = await skillHeaderModel.readAll()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readHeaderById: async (req, res) => {
    try {
      const result = await skillHeaderModel.readById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readHeaderByName: async (req, res) => {
    try {
      const result = await skillHeaderModel.readByName(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readHeaderTrash: async (req, res) => {
    try {
      const result = await skillHeaderModel.readTrash()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  updateHeaderById: async (req, res) => {
    try {
      const result = await skillHeaderModel.updateById(req.body, req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  deleteHeaderDataById: async (req, res) => {
    try {
      const result = await skillHeaderModel.deleteDataById(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  softDeleteHeaderDataById: async (req, res) => {
    try {
      const result = await skillHeaderModel.softDeleteDataById()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  createBodyData: async (req, res) => {
    try {
      const result = {}
      result.delete = await skillBodyModel.deleteDataByEngineer(req.params)
      result.create = await skillBodyModel.createData(req.body)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readBodyAll: async (req, res) => {
    try {
      const result = await skillBodyModel.readAll()
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readBodyByEngineer: async (req, res) => {
    try {
      const result = await skillBodyModel.readByEngineer(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  },

  readBodyBySkill: async (req, res) => {
    try {
      const result = await skillBodyModel.readBySkill(req.params)
      response(res, 200, result)
    } catch (error) {
      console.log(error)
      response(res, 500, error)
    }
  }

}
