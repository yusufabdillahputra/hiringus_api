const Router = require('express').Router()
const { verifyToken } = require('../middleware/authentication')
const { verifyAuthorization } = require('../middleware/authorization')
const controller = 'engineer'
const {
  createData,
  readAll,
  readById,
  readByName,
  readByCompany,
  readTrash,
  updateById,
  deleteDataById,
  softDeleteDataById,
  readAllSortByName,
  readAllSortBySkill,
  readAllSortByUpdatedAt
} = require(`../controllers/${controller}`)

Router
  .all(`/${controller}*`, verifyToken)
  .post(`/${controller}`, verifyAuthorization, createData)
  .get(`/${controller}`, verifyAuthorization, readAll)
  .get(`/${controller}/id/:id_engineer`, verifyAuthorization, readById)
  .get(`/${controller}/name/:name_engineer`, verifyAuthorization, readByName)
  .get(`/${controller}/company/:name_company`, verifyAuthorization, readByCompany)
  .get(`/${controller}/trash`, verifyAuthorization, readTrash)
  .get(`/${controller}/sort/name`, verifyAuthorization, readAllSortByName)
  .get(`/${controller}/sort/skill`, verifyAuthorization, readAllSortBySkill)
  .get(`/${controller}/sort/updated`, verifyAuthorization, readAllSortByUpdatedAt)
  .put(`/${controller}/id/:id_engineer`, verifyAuthorization, updateById)
  .delete(`/${controller}/id/:id_engineer`, verifyAuthorization, deleteDataById)
  .put(`/${controller}/del/:id_engineer`, verifyAuthorization, softDeleteDataById)

module.exports = Router
