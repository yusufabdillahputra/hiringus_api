const conn = require('../../../config/database')
const table = 'tbl_engineer'
const view = 'vw_engineer'
const primaryKey = 'id_engineer'

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
  readByName: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE name_engineer LIKE ? `, ['%' + params.name_engineer + '%'], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  updateById: (body, params) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET ? WHERE ${primaryKey} = ?`, [body, params[primaryKey]], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  deleteDataById: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM ${table} WHERE ${primaryKey} = ?`, params[primaryKey], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readAllSortBy: (field) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} ORDER BY ${field}`, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readAllSortByBodySkill: (field) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM vw_bdy_skill ORDER BY ${field} `, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
  // readTrash: () => {
  //   try {
  //     return 'ok'
  //   } catch (error) {
  //     return error
  //   }
  // },
  // softDeleteDataById: () => {
  //   try {
  //     return 'ok'
  //   } catch (error) {
  //     return error
  //   }
  // },
}
