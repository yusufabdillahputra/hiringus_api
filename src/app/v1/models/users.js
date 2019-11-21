const bcryptHelper = require('../../../helper/bcrypt')
const conn = require('../../../config/database')
const table = 'tbl_users'
const view = 'vw_users'
const primaryKey = 'id_users'

module.exports = {
  createData: async (body) => {
    const hashPassword = await bcryptHelper.hash(body.password_users)
    return new Promise((resolve, reject) => {
      const data = {
        id_company: body.id_company,
        name_users: body.name_users,
        username_users: body.username_users,
        password_users: hashPassword,
        access_users: body.access_users,
        telp_users: body.telp_users,
        email_users: body.email_users,
        created_by: body.created_by
      }
      conn.query(`INSERT INTO ${table} SET ? `, data, async (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  createRules: (id, rules) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET rules_users = '${rules}' WHERE ${primaryKey} = ?`, id, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readAll: (query = null) => {
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
  readByLogin: (body) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT ${primaryKey}, username_users, password_users, name_users, access_users, remember_token FROM ${view} WHERE username_users = ? LIMIT 1`, body.username_users, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  createRememberToken: (token, id) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET remember_token = ? WHERE ${primaryKey} = ?`, [token, id], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readRememberToken: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT remember_token FROM ${view} WHERE ? LIMIT 1`, params, (err, result) => {
        if (err) reject(err)
        resolve(result[0].remember_token)
      })
    })
  },
  destroyRememberToken: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET remember_token = NULL WHERE ${primaryKey} = ?`, id, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readById: (params) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM ${view} WHERE ? LIMIT 1`, params, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readPrivileged: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT ${primaryKey}, access_users FROM ${table} WHERE ${primaryKey} = ? LIMIT 1`, id, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readRules: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT rules_users FROM ${table} WHERE ${primaryKey} = ? LIMIT 1`, id, (err, result) => {
        if (err) reject(err)
        setTimeout(() => {
          resolve(JSON.parse(result[0].rules_users))
        })
      })
    })
  },
  readByName: (params, query) => {
    if (query.limit) {
      if (query.offset) {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} WHERE name_users LIKE ? LIMIT ${query.limit} OFFSET ${query.offset}`, ['%' + params.name_users + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          conn.query(`SELECT * FROM ${view} WHERE name_users LIKE ? LIMIT ${query.limit}`, ['%' + params.name_users + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${view} WHERE name_users LIKE ? `, ['%' + params.name_users + '%'], (err, result) => {
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
          conn.query(`SELECT * FROM ${view} WHERE name_company LIKE ? LIMIT ${query.limit}`, ['%' + params.name_company + '%'], (err, result) => {
            if (err) reject(err)
            resolve(result)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${view} WHERE name_company LIKE ?`, ['%' + params.name_company + '%'], (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    }
  },
  updateById: async (body, params) => {
    const hashPassword = await bcryptHelper.hash(body.password_users)
    return new Promise((resolve, reject) => {
      const data = {
        id_company: body.id_company,
        name_users: body.name_users,
        username_users: body.username_users,
        password_users: hashPassword,
        access_users: body.access_users,
        telp_users: body.telp_users,
        email_users: body.email_users,
        created_by: body.created_by
      }
      conn.query(`UPDATE ${table} SET ? WHERE ${primaryKey} = ?`, [data, params[primaryKey]], (err, result) => {
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
