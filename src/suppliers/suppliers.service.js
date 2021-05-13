const knex = require("../db/fixtures/connection");

function destroy(supplier_id) {
    return knex("suppliers").where({ supplier_id }).del();
  }

function read(supplier_id) {
    return knex("suppliers").select("*").where({ supplier_id }).first();
  }
  
  function update(updatedSupplier) {
    return knex("suppliers")
      .select("*")
      .where({ supplier_id: updatedSupplier.supplier_id })
      .update(updatedSupplier, "*");
  }

function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  delete: destroy,
  create,
  read,
  update,
};