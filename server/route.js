const Path = require('path')
const router = require('express').Router()

router.route('/').get((req,res) => res.sendFile(Path.resolve(__dirname, '../public/index.html')))


module.exports = router