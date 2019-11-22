const Router = require('express').Router()
const { verifyToken } = require('../middleware/authentication')
const { verifyAuthorization } = require('../middleware/authorization')
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
} = require(`../controllers/${controller}`)

Router
  .all(`/${controller}/*`, verifyToken)
  .post(`/${controller}/head`, verifyAuthorization, createHeaderData)
  .get(`/${controller}/head`, verifyAuthorization, readHeaderAll)
  .get(`/${controller}/head/id/:id_skill`, verifyAuthorization, readHeaderById)
  .get(`/${controller}/head/name/:name_skill`, verifyAuthorization, readHeaderByName)
  .get(`/${controller}/head/trash`, verifyAuthorization, readHeaderTrash)
  .put(`/${controller}/head/:id_skill`, verifyAuthorization, updateHeaderById)
  .delete(`/${controller}/head/id/:id_skill`, verifyAuthorization, deleteHeaderDataById)
  .put(`/${controller}/head/del/:id_skill`, verifyAuthorization, softDeleteHeaderDataById)
  .post(`/${controller}/body/:id_engineer`, verifyAuthorization, createBodyData)
  .get(`/${controller}/body`, verifyAuthorization, readBodyAll)
  .get(`/${controller}/body/engineer/:name_engineer`, verifyAuthorization, readBodyByEngineer)
  .get(`/${controller}/body/skill/:name_skill`, verifyAuthorization, readBodyBySkill)

module.exports = Router
