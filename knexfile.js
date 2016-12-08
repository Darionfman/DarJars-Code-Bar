module.exports = {

 development: {
   client: 'pg',
   connection: {
     database: 'Codebar_dev'
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 },

 test: {
   client: 'pg',
   connection: {
     database: 'Codebar_test'
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
     tableName: 'knex_migrations'
   }
 },
}