exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl.text('vin', 17 )
      .unique()
      .notNullable();
    tbl.text('make', 20)
      .notNullable();
    tbl.text('model', 20)
      .notNullable();
    tbl.integer('mileage', 1000000)
      .notNullable();
    tbl.text('title');
    tbl.text('transmission');
  });

};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};



