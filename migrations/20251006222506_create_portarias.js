exports.up = (knex) =>
  knex.schema.createTable("portarias", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("nome").notNullable();
  });

exports.down = (knex) => knex.schema.dropTable("portarias");
