const Router = require('express').Router()
const controller = 'company'
const {
  createData,
  readAll,
  readById,
  readByName,
  readTrash,
  updateById,
  deleteDataById,
  softDeleteDataById
} = require(`../controllers/${controller}`)

Router
  .post(`/${controller}`, createData)
  .get(`/${controller}`, readAll)
  .get(`/${controller}/id/:id_company`, readById)
  .get(`/${controller}/name/:name_company`, readByName)
  .get(`/${controller}/trash`, readTrash)
  .put(`/${controller}/:id_company`, updateById)
  .delete(`/${controller}/id/:id_company`, deleteDataById)
  .put(`/${controller}/del/:id_company`, softDeleteDataById)

module.exports = Router
