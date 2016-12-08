const express = require('express')
const routes = require('./route')
const Path = require('path')

const app = express()

const assetFolder = Path.resolve(__dirname, '../public')
routes.use(express.static(assetFolder))

routes.get('/*', function (req, res) {
  res.sendFile(assetFolder + '/index.html')
})

const port = process.env.PORT || 4000

app.listen(port)

console.log(`Listening on port ${port}`)