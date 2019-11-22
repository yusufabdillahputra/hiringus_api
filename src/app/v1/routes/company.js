const Router = require('express').Router()
const { verifyToken } = require('../middleware/authentication')
const { verifyAuthorization } = require('../middleware/authorization')
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
  .all(`/${controller}*`, verifyToken)
  .post(`/${controller}`, verifyAuthorization, createData)
  .get(`/${controller}`, verifyAuthorization, readAll)
  .get(`/${controller}/id/:id_company`, verifyAuthorization, readById)
  .get(`/${controller}/name/:name_company`, verifyAuthorization, readByName)
  .get(`/${controller}/trash`, verifyAuthorization, readTrash)
  .put(`/${controller}/:id_company`, verifyAuthorization, updateById)
  .delete(`/${controller}/id/:id_company`, verifyAuthorization, deleteDataById)
  .put(`/${controller}/del/:id_company`, verifyAuthorization, softDeleteDataById)

module.exports = Router
