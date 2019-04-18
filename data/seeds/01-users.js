
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { name: 'Elan' },
      ]);
    });
};
