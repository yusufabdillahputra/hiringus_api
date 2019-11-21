const conn = require('../../../config/database')
const table = 'tbl_bdy_skill'
const view = 'vw_bdy_skill'

module.exports = {
  createData: (body) => {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO ${table} (id_skill, id_engineer, created_by, created_at) VALUES ? `, [body], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readAll: () => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view}`, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readById: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE ? `, params, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readByEngineer: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE name_engineer LIKE ? `, ['%' + params.name_engineer + '%'], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readBySkill: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE name_skill LIKE ? `, ['%' + params.name_skill + '%'], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  deleteDataByEngineer: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM ${table} WHERE id_engineer = ?`, params.id_engineer, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}
