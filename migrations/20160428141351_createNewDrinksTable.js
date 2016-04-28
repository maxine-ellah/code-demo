exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('drinks', function(table) {
    table.increments('id')
    table.string('beverage')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('drinks').then(function () {
    console.log('drinks table was dropped')
  })
};
