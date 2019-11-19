const path = require('../config/path')
const Router = require('express').Router()
const controller = 'skill'
const {
  createData,
  readAll,
  readById,
  readByName,
  readTrash,
  updateById,
  deleteDataById,
  softDeleteDataById
} = require(`${path}/controllers/${controller}`)

Router
  .post(`/${controller}`, createData)
  .get(`/${controller}`, readAll)
  .get(`/${controller}/id/:id_skill`, readById)
  .get(`/${controller}/name/:name_skill`, readByName)
  .get(`/${controller}/trash`, readTrash)
  .put(`/${controller}/:id_skill`, updateById)
  .delete(`/${controller}/id/:id_skill`, deleteDataById)
  .put(`/${controller}/del/:id_skill`, softDeleteDataById)

module.exports = Router
