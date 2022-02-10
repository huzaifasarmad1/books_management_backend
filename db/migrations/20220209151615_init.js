/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('students', function (table) {
       table.increments('id');
       table.string('first_name').notNullable();
       table.string('last_name').notNullable();
       table.timestamps(true,true)
    })
    .createTable('books', function (table) {
       table.increments('id');
       table.string('book_id').notNullable();
       table.string('book_name').notNullable();
       table.string('author').notNullable();
       table.string('borrowed_by').notNullable();
       table.string('borrow_date').notNullable();
       table.string('return_date').notNullable();
       table.timestamps(true,true)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('students')
    knex.schema.dropTable('books')
};
