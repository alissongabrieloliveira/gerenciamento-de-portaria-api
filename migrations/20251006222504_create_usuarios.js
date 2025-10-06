exports.up = (knex) =>
  knex.schema.createTable("usuarios", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("nome").notNullable();
    table.string("email").notNullable().unique();
    table.string("senha_hash").notNullable();
    table.enu("tipo_usuario", ["porteiro", "admin"]).notNullable();
    table.timestamp("criado_em").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("usuarios");
