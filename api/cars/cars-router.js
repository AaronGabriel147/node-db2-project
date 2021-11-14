const express = require('express');
const router = express.Router();
const db = require('../../data/db-config')





// Get all cars
router.get('/', (req, res, next) => {
    // Accounts.getAll()
    //     .then(item => {
    //         res.status(200).json(item)
    //         // throw new Error('Error')
    //     })
    //     .catch(next)
})






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