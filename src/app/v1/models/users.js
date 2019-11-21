const conn = require('../../../config/database')
const table = 'tbl_users'
const view = 'vw_users'
const primaryKey = 'id_users'

module.exports = {
  createData: (body) => {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO ${table} SET ? `, body, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readAll: () => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view}`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readByLogin: (body) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT ${primaryKey}, username_users, name_users, access_users, remember_token FROM ${view} WHERE username_users = ? AND password_users = ? LIMIT 1`, [body.username_users, body.password_users], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  createRememberToken: (token, id) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET remember_token = ? WHERE ${primaryKey} = ?`, [token, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readRememberToken: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT remember_token FROM ${view} WHERE ? LIMIT 1`, params, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result[0].remember_token)
      })
    })
  },
  destroyRememberToken: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET remember_token = NULL WHERE ${primaryKey} = ?`, id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readById: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE ? `, params, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readByName: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE name_users LIKE ? `, ['%' + params.name_users + '%'], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readByCompany: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE name_company LIKE ?`, ['%' + params.name_company + '%'], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  updateById: (body, params) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET ? WHERE ${primaryKey} = ?`, [body, params[primaryKey]], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  deleteDataById: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM ${table} WHERE ${primaryKey} = ?`, params[primaryKey], (err, result) => {
        if (err) reject(new Error(err))
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
