exports.up = (knex) =>
  knex.schema.createTable("veiculo_colaborador_rel", (table) => {
    table
      .uuid("veiculo_id")
      .notNullable()
      .references("veiculo_id")
      .inTable("veiculos_colaboradores")
      .onDelete("CASCADE");

    table
      .uuid("colaborador_id")
      .notNullable()
      .references("id")
      .inTable("colaboradores")
      .onDelete("CASCADE");

    table.primary(["veiculo_id", "colaborador_id"]);
  });

exports.down = (knex) => knex.schema.dropTable("veiculo_colaborador_rel");
