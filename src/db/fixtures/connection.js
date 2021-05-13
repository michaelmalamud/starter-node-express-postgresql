//determines environment where code is running and stores it in env variable

const env = process.env.NODE_ENV || "development";

//reqires database configuration object from knexfile and stores in config var

const config = require("../../../knexfile")[env];

//initializes a Knex instance by calling the knex module, passing in config as an argument.

const knex = require("knex")(config);

//exports knex instance for use by other files 

module.exports = knex;