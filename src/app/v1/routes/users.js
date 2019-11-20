const Router = require('express').Router()
const controller = 'users'
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
  .post(`/${controller}`, createData)
  .get(`/${controller}`, readAll)
  .get(`/${controller}/id/:id_users`, readById)
  .get(`/${controller}/name/:name_users`, readByName)
  .get(`/${controller}/company/:name_company`, readByCompany)
  .get(`/${controller}/trash`, readTrash)
  .put(`/${controller}/:id_users`, updateById)
  .delete(`/${controller}/id/:id_users`, deleteDataById)
  .put(`/${controller}/del/:id_users`, softDeleteDataById)

module.exports = Router
