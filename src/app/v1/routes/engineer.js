const Router = require('express').Router()
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
  .post(`/${controller}`, createData)
  .get(`/${controller}`, readAll)
  .get(`/${controller}/id/:id_engineer`, readById)
  .get(`/${controller}/name/:name_engineer`, readByName)
  .get(`/${controller}/company/:name_company`, readByCompany)
  .get(`/${controller}/trash`, readTrash)
  .get(`/${controller}/sort/name`, readAllSortByName)
  .get(`/${controller}/sort/skill`, readAllSortBySkill)
  .get(`/${controller}/sort/updated`, readAllSortByUpdatedAt)
  .put(`/${controller}/id/:id_engineer`, updateById)
  .delete(`/${controller}/id/:id_engineer`, deleteDataById)
  .put(`/${controller}/del/:id_engineer`, softDeleteDataById)

module.exports = Router
