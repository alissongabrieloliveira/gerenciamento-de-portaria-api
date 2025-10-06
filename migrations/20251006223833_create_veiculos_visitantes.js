exports.up = (knex) =>
  knex.schema.createTable("veiculos_visitantes", (table) => {
    table
      .uuid("veiculo_id")
      .primary()
      .references("id")
      .inTable("veiculos")
      .onDelete("CASCADE");

    table.string("nome_visitante").notNullable();
    table.string("documento").notNullable(); // CPF
    table.string("celular");
    table
      .uuid("setor_visitado_id")
      .references("id")
      .inTable("setores")
      .onDelete("SET NULL");
    table.string("empresa_origem");
  });

exports.down = (knex) => knex.schema.dropTable("veiculos_visitantes");
