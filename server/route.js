const Path = require('path')
const router = require('express').Router()

router.route('/').get((req,res) => res.sendFile(Path.resolve(__dirname, '../public/index.html')))
router.route('/test').get((req,res) => res.send('Hello'))
module.exports = router