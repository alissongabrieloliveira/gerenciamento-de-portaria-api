exports.up = (knex) =>
  knex.schema.createTable("veiculos_colaboradores", (table) => {
    table
      .uuid("veiculo_id")
      .primary()
      .references("id")
      .inTable("veiculos")
      .onDelete("CASCADE");
    table.string("motivo");
  });

exports.down = (knex) => knex.schema.dropTable("veiculos_colaboradores");
