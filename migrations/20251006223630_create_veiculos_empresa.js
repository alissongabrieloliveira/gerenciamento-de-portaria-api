exports.up = (knex) =>
  knex.schema.createTable("veiculos_empresa", (table) => {
    table
      .uuid("veiculo_id")
      .primary()
      .references("id")
      .inTable("veiculos")
      .onDelete("CASCADE");

    table.string("identificacao_interna");
    table
      .uuid("motorista_id")
      .references("id")
      .inTable("colaboradores")
      .onDelete("SET NULL");

    table.string("motivo_saida");
    table.text("observacao");
    table.string("destino");
  });

exports.down = (knex) => knex.schema.dropTable("veiculos_empresa");
