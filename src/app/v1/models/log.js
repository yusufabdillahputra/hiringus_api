const conn = require('../../../config/database')
const table = 'tbl_log'
const view = 'vw_log'

module.exports = {

  createData: (body) => {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO ${table} SET ? `, body, (err, result) => {
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
  readByNameUsers: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE name_users LIKE ? `, ['%' + params.name_users + '%'], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

}
