const db = require('../config/db')

const Snippet = {}

Snippet.fetchOne = (id) => 
  db('Snippets').where({id: id})
  .then(row => row[0])
  .catch(err => err )

Snippet.fetchAll = () =>
  db.select().from('Snippets')
  .then(rows => rows)
  .catch(err => err)

Snippet.update = (id,info) => 
  db('Snippets').where({id:id})
  .update(info)
  .returning('id')
  .then(id => id[0])
  .catch(err => err)

Snippet.delete = (id) =>
  db('Snippets').where({id:id})
  .del()
  .returning('id')
  .then(id => id[0])
  .catch(err => err)

Snippet.save = (snippetData) => 
  db('Snippets')
  .insert(snippetData)
  .returning('id')
  .then(id => id[0])
  .catch(err => { console.log(err) })

module.exports = Snippet