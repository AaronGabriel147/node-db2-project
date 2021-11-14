

// In terminal: @@@@@@@@ npx knex migrate:up @@@@@@@@@ - if there is a problem it may be the knex file or dbconfig
// WOuld need this if the table file did nor already exist. = npx knex migrate:make initial-migration 

// There is no db without migrations for this module.
// Migrations can evolve the database thanks to migration files. We can create tables, move data among tables, etc.
// Migration must match current commit or main can break.

// The critical information for each car is the vin, make, model, and mileage. They also track transmission type (manual, automatic...) and status of the title (clean, salvage...), but this information is not always immediately known. Write the "up" and "down" functions inside the `data/migrations/01-make_cars_table.js` migration file to satisfy the following schema:

// | field        | data type        | metadata                                            |
// | ------------ | ---------------- | --------------------------------------------------- |
// | id           | unsigned integer | primary key, auto-increments, generated by database |
// | vin          | string           | required, unique                                    |
// | make         | string           | required                                            |
// | model        | string           | required                                            |
// | mileage      | numeric          | required                                            |
// | title        | string           | optional                                            |
// | transmission | string           | optional                                            |



// notNullable basically means required.*
// Once this is created, a .db3 file is created in the data folder.
exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments("cars_id")                // creates an id auto incrementing integer column. cars_id is a unique id for each car (which is recommended)
    table.string("vin").unique()// .notNullable() // creates a vin string column. vin is a unique id for each car (which is recommended)
    table.string("make")// .notNullable()         // creates a make string column.
    table.string("model")// .notNullable()        // creates a model string column.
    table.integer("mileage")// .notNullable()     // creates a mileage integer column.
    table.string("title")                      // .defaultTo('unknown')        // creates a title string column.
    table.string("transmission")    // .defaultTo('unknown') // creates a transmission string column.
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};




// __________________________________________________________________________

// Documentation:
// https://knexjs.org/#Schema   This is what Gabriel said everyone uses.
// https://knexjs.org/#Migrations-up



// Module 1 

// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('accounts', tbl => {
//     tbl.increments();
//     tbl.string('name')
//       .notNullable()
//       .unique();
//     tbl.decimal('budget')
//       .notNullable();
//   });
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTableIfExists('accounts');
// };




// __________________________________________________________



// Lambda material:


// The migration file should have both an up and a down function. Within the up function, 
// we write the ended database changes. Within the down function, we write the code to undo the up functions. 
// This allows us to undo any changes made to the schema if necessary.

// exports.up = function(knex, Promise) {
//   // don't forget the return statement
//   return knex.schema.createTable('accounts', tbl => {
//     // creates a primary key called id
//     tbl.increments();
//     // creates a text field called name which is both required and unique
//     tbl.text('name', 128).unique().notNullable();
//     // creates a numeric field called budget which is required
//     tbl.decimal('budget').notNullable();
//   });
// };

// exports.down = function(knex, Promise) {
//   // drops the entire table
//   return knex.schema.dropTableIfExists('accounts');
// };
// References for these methods are found in the schema builder section of the Knex docs (Links to an external site.).

// At this point, the table is not yet created. To run this (and any other) migrations, use the command:

// knex migrate:latest

// Note if the database does not exist, this command will auto-generate one. We can use SQLite Studio to confirm that the accounts table has been created.



// Changes and Rollbacks

// If we realize you need to update your schema later down the road, you shouldn't edit the migration file. Instead, you will want to create a new migration with the command:

// knex migrate:make accounts-schema-update

// Once we've written our updates into this file, we save and close with:

// knex migrate:latest

// If we migrate our database and then quickly realize something isn't right, we can edit the migration file. However, first, we need to rollback (or undo) our last migration with:

// knex migrate:rollback

// Finally, we are free to rerun that file with knex migrate latest.

// Note: A rollback should not be used to edit an old migration file once that file has been accepted into a main branch. However, an entire team may use a rollback to return to a previous version of a database.