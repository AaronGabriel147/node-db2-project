const express = require('express');
const router = express.Router();
// const db = require('../../data/db-config')

const Car = require('../../api/cars/cars-model')




// Get all cars
router.get('/', (req, res, next) => {
    Car.getAll()
        .then(item => {
            res.status(200).json(item)
            // throw new Error('Error')
        })
        .catch(next)
})

// router.get('/', (req, res) => {
//     carsModel.getAll()
//         .then(cars => {
//             res.status(200).send(cars);
//         })
//         .catch(message => {
//             res.status(500).send(message);
//         });
// });




// `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).
router.get('/', (req, res) => {

})


// `[GET] /api/cars/:id` returns a car by the given id.
router.get('/', (req, res) => {

})


// `[POST] /api/cars` returns the created car.
router.post('/', (req, res) => {

})


exports = module.exports = router;


// - Write CR (of CRUD) for the `cars` resource, using the middleware and model 
//   functions described above wherever appropriate inside `api/cars/cars-router.js` :

//   - `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).

//   - `[GET] /api/cars/:id` returns a car by the given id.

//   - `[POST] /api/cars` returns the created car.