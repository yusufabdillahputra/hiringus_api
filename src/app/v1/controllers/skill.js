const { responseWithHeader } = require('../../../helper/response')
const skillHeaderModel = require('../models/skillHeader')
const skillBodyModel = require('../models/skillBody')

module.exports = {

  createHeaderData: async (req, res) => {
    try {
      const result = await skillHeaderModel.createData(req.body)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readHeaderAll: async (req, res) => {
    try {
      const result = await skillHeaderModel.readAll(req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readHeaderById: async (req, res) => {
    try {
      const result = await skillHeaderModel.readById(req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readHeaderByName: async (req, res) => {
    try {
      const result = await skillHeaderModel.readByName(req.params, req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readHeaderTrash: async (req, res) => {
    try {
      const result = await skillHeaderModel.readTrash()
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  updateHeaderById: async (req, res) => {
    try {
      const result = await skillHeaderModel.updateById(req.body, req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  deleteHeaderDataById: async (req, res) => {
    try {
      const result = await skillHeaderModel.deleteDataById(req.params)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  softDeleteHeaderDataById: async (req, res) => {
    try {
      const result = await skillHeaderModel.softDeleteDataById()
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  createBodyData: async (req, res) => {
    try {
      const result = {}
      result.delete = await skillBodyModel.deleteDataByEngineer(req.params)
      result.create = await skillBodyModel.createData(req.body)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readBodyAll: async (req, res) => {
    try {
      const result = await skillBodyModel.readAll(req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readBodyByEngineer: async (req, res) => {
    try {
      const result = await skillBodyModel.readByEngineer(req.params, req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  },

  readBodyBySkill: async (req, res) => {
    try {
      const result = await skillBodyModel.readBySkill(req.params, req.query)
      responseWithHeader(req, res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithHeader(req, res, 500, error)
    }
  }

}
