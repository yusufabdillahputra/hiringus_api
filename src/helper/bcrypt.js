require('dotenv/config')
const bcrypt = require('bcryptjs')

module.exports = {

  hash: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) reject(new Error(error))
        resolve(hash)
      })
    })
  }

}
