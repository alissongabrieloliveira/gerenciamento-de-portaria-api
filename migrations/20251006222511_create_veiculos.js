exports.up = (knex) =>
  knex.schema.createTable("veiculos", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table
      .enu("tipo", ["empresa", "colaborador", "visitante", "prestador"])
      .notNullable();

    table.string("placa").notNullable();
    table.string("marca");
    table.string("modelo");
    table.string("cor");

    table.decimal("km_horimetro");

    table
      .uuid("portaria_id")
      .references("id")
      .inTable("portarias")
      .onDelete("SET NULL");
    table
      .uuid("responsavel_id")
      .references("id")
      .inTable("usuarios")
      .onDelete("SET NULL");

    table.timestamp("data_entrada");
    table.timestamp("data_saida");

    table.timestamp("criado_em").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("veiculos");
