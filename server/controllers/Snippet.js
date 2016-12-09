const Snippet = require('../models/Snippet')

module.exports = {
  createSnippet: (req,res) => {
    const snippetData = req.body
    Snippet.save(snippetData)
    .then((id) => res.status(201).send({'id': id}))
    .catch((err) => {
      console.log('Snippet name may already be taken')
      return res.send({'error': err})
    })
  },
  getAllSnippets: (req,res) => {
    Snippet.fetchAll()
    .then((snippets) => res.status(200).send(snippets))
    .catch((err) => {
      console.log('Can not fetch snippets.')
      return res.status(500).send({'error': err})
    })
  },
  getOneSnippet: (req,res) => {
    const id = req.params.id
    Snippet.fetchOne(id)
    .then((snippet) => res.status(200).send(snippet))
    .catch((err) => {
      console.log('Can not find snippet, may not exist')
      return res.status(404).send(snippet)
    })
  },
  removeCard: (req, res) => {
    const id = req.params.id
    Snippet.delete(id)
    .then(numDel => res.status(200).send({id: numDel}))
    .then(() => res.end())
  }
}