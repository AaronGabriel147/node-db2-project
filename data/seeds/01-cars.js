// STRETCH

// Once this is written, go to terminal and type = @@@@ npx knex seed:run @@@@

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate() // truncate() over del() because truncate orders the id names. // https://knexjs.org/#Schema-truncate 
        .then(function () {
            // Inserts seed entries
            return knex('cars').insert([
                {
                    vin: '1HGCR2FV4FN076669',
                    make: 'Ford',
                    model: 'Galaxie',
                    mileage: '184350',
                    title: 'Salvage',
                    transmission: 'Automatic'
                },
                {
                    vin: '1HGCR2FV4FN079079',
                    make: 'Chrysler',
                    model: 'Newport',
                    mileage: '232000',
                    title: 'Clean',
                    transmission: 'Manual'
                }
            ]);
        });
};

