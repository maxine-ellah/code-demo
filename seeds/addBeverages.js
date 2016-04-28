
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('drinks').del(),

    // Inserts seed entries
    knex('drinks').insert({id: 1, beverage: 'mojito'}),
    knex('drinks').insert({id: 2, beverage: 'piña colada'}),
    knex('drinks').insert({id: 3, beverage: 'chi'})
  );
};
