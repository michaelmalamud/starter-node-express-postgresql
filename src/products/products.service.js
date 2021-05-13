const knex = require("../db/fixtures/connection");

function read(product_id) {
    return knex("products").select("*").where({ product_id }).first();
  }

function list() {
  return knex("products").select("*");
}

module.exports = {
  list,
  read
};