/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("currency", (table) => {
    table.text("abbreviation").notNullable().primary();
  });

  await knex("currency").insert(
    ["USD", "CAD"].map((abbreviation) => ({ abbreviation }))
  );

  await knex.schema.createTable("billing_settings", (table) => {
    table.uuid("id").notNullable().primary();
    table.text("currency").notNullable().references("currency.abbreviation");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("billing_settings");
  await knex.schema.dropTable("currency");
};
