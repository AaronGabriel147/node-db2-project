const express = require('express');
const router = express.Router();
// const db = require('../../data/db-config')

// Middleware
// const { checkCarId,
//     checkCarPayload,
//     checkVinNumberValid,
//     checkVinNumberUnique } = require('./cars-middleware')

// Models
const Car = require('../../api/cars/cars-model')
// getAll
// getById
// create



// Get all cars
// `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).
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





// `[GET] /api/cars/:id` returns a car by the given id.
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Car.getById(id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(next)
})



// const create = async ({ vin, make, model, mileage, title, transmission }) => {
//     const [id] = await db('cars').insert({ vin, make, model, mileage, title, transmission })
//     return getById(id)
//   }

// checkCarId,
// `[POST] /api/cars` returns the created car.
router.post('/:id/', (req, res, next) => {
    const addCar = { cars_id: req.params.id, ...req.body }
    console.log('xxxxxxxxxx', addCar)

    Car.create(addCar)
        .then(stuff => {
            res.status(201).json(stuff);
        })
        .catch(next);
})

// model of old project...........
// function insert(user) {
//     return db('users')
//       .insert(user)
//       .then(ids => {
//         return getById(ids[0]); // 
//       });
//   }

// old project...........
// router.post('/:id/posts', validateUserId, validatePost, (req, res, next) => {
//     const newPost = { user_id: req.params.id, ...req.body }
//     Posts.insert(newPost)
//         .then(post => {
//             res.status(201).json(post);
//         })
//         .catch(next);
// });


exports = module.exports = router;


// RETURN THE NEWLY CREATED USER POST
// this needs a middleware to verify user id
// and another middleware to check that the request body is valid
// const newPost = req.body // something I tried. 

//  I was stuck for 1.5 hours because I was entering the wrong json object into the HTTP client.
//  I did not have user_id in the json object. It must be like this:
// NOTE that the user_id must match the user_id in the URL. --> http://localhost:5000/api/users/2/posts
// {
//     "user_id": 2,
//     "text": "Not su,re how to test this POST"
// }

//  I had it like this:
// {
//     "text": "Not sure how to test this POST",
//     "postedBy": "Nobody"
// }



// ______________________________ NOTES ____________________________________



// const router = require('express').Router()

// const Accounts = require('../accounts/accounts-model')
// // getAll     
// // getById 
// // create
// // updateById
// // deleteById

// const mid = require('../accounts/accounts-middleware')


// // Async version
// // router.get('/', async (req, res, next) => {
// //   try {
// //     // const accounts = await Accounts.getAll()
// //     // res.status(200).json(accounts)
// //     throw new Error('Something went wrong') //  Did not work, want to test a catch 500
// //   } catch (err) {
// //     next(err)
// //   }
// // })

// // .then version
// router.get('/', (req, res, next) => {
//   Accounts.getAll()
//     .then(item => {
//       res.status(200).json(item)
//       // throw new Error('Error')
//     })
//     .catch(next)
// })



// // @@@@@@@@@@@@@@@@@@@@@@@@@ getById @@@@@@@@@@@@@@@@@@@@@@@@
// // //  ________________________________________________________
// // // THE version to test out the catch all 500 error
// // router.get('/:id', async (req, res, next) => {
// //   try {
// //     const accounts = await Accounts.getById(req.params.id)

// //     if (!accounts) {
// //       res.status(404).json({ message: 'You! messed up, not me.' }) // enter an ID into the URL that does not exist to test this 404
// //     } else {
// //       // res.status(200).json(accounts)
// //       throw new Error('Error')
// //       // next()
// //     }
// //   } catch (err) {
// //     next(err)
// //   }
// // })

// // Notes
// // catch (error) { // if there is an error, catch it
// // res.status(500).json({ message: 'Something went wrong!!!!!!!!' }) // return 500
// // }
// // console.log(error);

// // next(err) is very versatile, it let you give any type of response you want, like:
// // next({ status: 402, message: 'You are not authorized' })}) 





// router.get('/:id', mid.checkAccountId, async (req, res, next) => {
//   res.json(req.account)
// })

// // // Before middleqare
// // router.get('/:id', mid.checkAccountId, async (req, res, next) => {
// //   try {
// //     const account = await Accounts.getById(req.params.id)
// //     res.status(200).json(account)
// //     // throw new Error('Error')
// //   } catch (err) {
// //     next(err)
// //   }
// // })



// router.post('/',
//   mid.checkAccountPayload,
//   mid.checkAccountNameUnique,
//   async (req, res, next) => {
//     try {
//       res.json('PoStSsSSssSSsss')
//     } catch (err) {
//       next(err)
//     }
//   })



// router.put('/:id',
//   mid.checkAccountId,
//   mid.checkAccountPayload,
//   mid.checkAccountNameUnique,
//   async (req, res, next) => {
//     try {
//       res.json('Puttttttttt') // Remember to add a id in the url param to test.
//     } catch (err) {
//       next(err)
//     }

//   });

// router.delete('/:id', mid.checkAccountId, async (req, res, next) => {
//   try {
//     res.json('DELETEEEEEEEEEEE')
//   } catch (err) {
//     next(err)
//   }

// })


// // router.use((err, req, res, next) => { // eslint-disable-line
// //   // DO YOUR MAGIC
// // })

// module.exports = router;