// STRETCH

// Once this is written, go to terminal and type = @@@@ npx knex seed:run @@@@

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate() // truncate() is a method on knex. // https://knexjs.org/#Schema-truncate 
        .then(function () {
            // Inserts seed entries
            return knex('cars').insert([
                {
                    vin: '1HGCR2FV4FN079079',
                    make: 'Ford',
                    model: 'Galaxie',
                    mileage: '12000',
                    title: '',
                    transmission: 'Automatic'
                }
            ]);
        });
};

