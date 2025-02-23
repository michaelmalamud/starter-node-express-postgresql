const path = require("path");

//require dotenv 

require("dotenv").config();

//stores url from process.env

const { DATABASE_URL } = process.env;

// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
