require('dotenv').config({silent: true})

const express = require('express')
const routes = require('./route')
const Path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

const assetFolder = Path.resolve(__dirname, '../public')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan('dev'))
routes.use(express.static(assetFolder))

routes.get('/*', function (req, res) {
  res.sendFile(assetFolder + '/index.html')
})

app.use('/', routes)

const port = process.env.PORT || 4000

app.listen(port)

console.log(`Listening on port ${port}`)