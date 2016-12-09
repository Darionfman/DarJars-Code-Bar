const Path = require('path')
const Snippet = require('./controllers/Snippet')
const router = require('express').Router()

router.route('/').get((req,res) => res.sendFile(Path.resolve(__dirname, '../public/index.html')))

router.route('/api/snippet').post(Snippet.createSnippet)

module.exports = router