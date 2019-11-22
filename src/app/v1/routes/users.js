const Router = require('express').Router()
const controller = 'users'
const { verifyToken } = require('../middleware/authentication')
const { verifyAuthorization } = require('../middleware/authorization')
const {
  createData,
  readAll,
  readById,
  readByName,
  readByCompany,
  readTrash,
  updateById,
  deleteDataById,
  softDeleteDataById
} = require(`../controllers/${controller}`)

Router
  .all(`/${controller}*`, verifyToken)
  .post(`/${controller}`, verifyAuthorization, createData)
  .get(`/${controller}`, verifyAuthorization, readAll)
  .get(`/${controller}/id/:id_users`, verifyAuthorization, readById)
  .get(`/${controller}/name/:name_users`, verifyAuthorization, readByName)
  .get(`/${controller}/company/:name_company`, verifyAuthorization, readByCompany)
  .get(`/${controller}/trash`, verifyAuthorization, readTrash)
  .put(`/${controller}/:id_users`, verifyAuthorization, updateById)
  .delete(`/${controller}/id/:id_users`, verifyAuthorization, deleteDataById)
  .put(`/${controller}/del/:id_users`, verifyAuthorization, softDeleteDataById)

module.exports = Router
