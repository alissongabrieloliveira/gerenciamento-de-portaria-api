exports.up = (knex) =>
  knex.schema.createTable("colaboradores", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("nome").notNullable();
    table.string("cpf").notNullable().unique();
    table.string("telefone");
  });

exports.down = (knex) => knex.schema.dropTable("colaboradores");
