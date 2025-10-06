exports.up = (knex) =>
  knex.schema.createTable("veiculos_prestadores", (table) => {
    table
      .uuid("veiculo_id")
      .primary()
      .references("id")
      .inTable("veiculos")
      .onDelete("CASCADE");

    table.string("nome_prestador").notNullable();
    table.string("documento").notNullable();
    table.string("celular");
    table.string("empresa_origem");
    table.string("tipo_servico");
    table
      .uuid("setor_visitado_id")
      .references("id")
      .inTable("setores")
      .onDelete("SET NULL");
  });

exports.down = (knex) => knex.schema.dropTable("veiculos_prestadores");
