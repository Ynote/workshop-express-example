const PORT = process.env.PORT || 5000

const createServer = function() {
  const express = require('express')
  const app = express()

  app.get('/', function (req, res) {
    res.send('Hello World! I have a CI!')
  })

  const server = app.listen(PORT, function() {
    console.log(`Listening on ${ PORT }…`)
  })

  return server
}

module.exports = createServer
