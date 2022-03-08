// Update with your config settings.
// Update with your config settings.
require("dotenv").config(); // << WEIRD REQUIRE
/**
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:docker@localhost:5432/movies'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};