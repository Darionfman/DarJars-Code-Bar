const Path = require('path')
const Snippet = require('./controllers/Snippet')
const router = require('express').Router()

router.route('/').get((req,res) => res.sendFile(Path.resolve(__dirname, '../public/index.html')))

router.route('/api/snippets').post(Snippet.createSnippet)

router.route('/api/snippets').get((req,res) => res.send('stuff'))

module.exports = router