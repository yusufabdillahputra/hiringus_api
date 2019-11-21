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
  readAll: (query) => {
    if (query.limit) {
      if (query.offset) {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} LIMIT ${query.limit} OFFSET ${query.offset}`, (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} LIMIT ${query.limit}`, (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${view}`, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    }
  },
  readById: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE ? LIMIT 1`, params, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readByName: (params, query) => {
    if (query.limit) {
      if (query.offset) {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} WHERE name_engineer LIKE ? LIMIT ${query.limit} OFFSET ${query.offset}`, ['%' + params.name_engineer + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} WHERE name_engineer LIKE ? LIMIT ${query.limit} `, ['%' + params.name_engineer + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${view} WHERE name_engineer LIKE ? `, ['%' + params.name_engineer + '%'], (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    }
  },
  readByCompany: (params, query) => {
    if (query.limit) {
      if (query.offset) {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} WHERE name_company LIKE ? LIMIT ${query.limit} OFFSET ${query.offset}`, ['%' + params.name_company + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} WHERE name_company LIKE ? LIMIT ${query.limit} `, ['%' + params.name_company + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${view} WHERE name_company LIKE ? `, ['%' + params.name_company + '%'], (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    }
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
  readAllSortBy: (field, query) => {
    if (query.limit) {
      if (query.offset) {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} ORDER BY ${field} LIMIT ${query.limit} OFFSET ${query.offset}`, (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} ORDER BY ${field} LIMIT ${query.limit}`, (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${view} ORDER BY ${field}`, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    }
  },
  readAllSortByBodySkill: (field, query) => {
    if (query.limit) {
      if (query.offset) {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM vw_bdy_skill ORDER BY ${field} LIMIT ${query.limit} OFFSET ${query.offset}`, (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM vw_bdy_skill ORDER BY ${field} LIMIT ${query.limit}`, (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM vw_bdy_skill ORDER BY ${field} `, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    }
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
