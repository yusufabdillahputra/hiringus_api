require('dotenv/config')
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

conn.connect((err) => {
  if (err) throw console.log(err)
  console.log('Database connected')
})

module.exports = conn
