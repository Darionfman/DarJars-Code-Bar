
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Snippets', function(table){
      table.string('id').primary()
      table.string('code').notNullable()
      table.string('name', 45).notNullable()
    }),
    knex.schema.createTableIfNotExists('Comments', function(table){
      table.string('id').primary()
      table.string('comment').notNullable()
      table.string('snippet_id')
      table.foreign('snippet_id').references('Snippets.id')
    })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTableIfExists('Snippets'),
    knex.schema.dropTableIfExists('Comments')
  ])
};
