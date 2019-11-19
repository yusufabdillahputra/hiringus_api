const path = require('../config/path')
const Router = require('express').Router()
const controller = 'skill'
const {
  createHeaderData,
  readHeaderAll,
  readHeaderById,
  readHeaderByName,
  readHeaderTrash,
  updateHeaderById,
  deleteHeaderDataById,
  softDeleteHeaderDataById,
  readBodyAll,
  createBodyData,
  readBodyByEngineer,
  readBodyBySkill
} = require(`${path}/controllers/${controller}`)

Router
  .post(`/${controller}/head`, createHeaderData)
  .get(`/${controller}/head`, readHeaderAll)
  .get(`/${controller}/head/id/:id_skill`, readHeaderById)
  .get(`/${controller}/head/name/:name_skill`, readHeaderByName)
  .get(`/${controller}/head/trash`, readHeaderTrash)
  .put(`/${controller}/head/:id_skill`, updateHeaderById)
  .delete(`/${controller}/head/id/:id_skill`, deleteHeaderDataById)
  .put(`/${controller}/head/del/:id_skill`, softDeleteHeaderDataById)
  .post(`/${controller}/body/:id_engineer`, createBodyData)
  .get(`/${controller}/body`, readBodyAll)
  .get(`/${controller}/body/engineer/:name_engineer`, readBodyByEngineer)
  .get(`/${controller}/body/skill/:name_skill`, readBodyBySkill)

module.exports = Router
