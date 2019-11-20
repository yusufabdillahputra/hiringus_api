const Router = require('express').Router()
const { verifyToken } = require('../middleware/authentication')
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
  .all('/*', verifyToken)
  .post(`/${controller}`, createData)
  .get(`/${controller}/:limit?/:offset?`, readAll)
  .get(`/${controller}/id/:id_company`, readById)
  .get(`/${controller}/name/:name_company`, readByName)
  .get(`/${controller}/trash`, readTrash)
  .put(`/${controller}/:id_company`, updateById)
  .delete(`/${controller}/id/:id_company`, deleteDataById)
  .put(`/${controller}/del/:id_company`, softDeleteDataById)

module.exports = Router
