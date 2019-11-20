require('dotenv/config')
const app = require('express')()
const bodyParser = require('body-parser')
const xssFilter = require('x-xss-protection')
const PORT = process.env.SERVER_PORT
const API_VERSION = process.env.API_VERSION
const routes = require(`../app/v${API_VERSION}/routes`)

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
app.use(
  bodyParser.json(),
  bodyParser.urlencoded({ extented: false }),
  xssFilter({
    setOnOldIE: true,
    reportUri: '/report-xss-violation'
  }),
  routes
)

module.exports = app
