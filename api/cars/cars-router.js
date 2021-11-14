const express = require('express');
const router = express.Router();
const db = require('../../data/db-config')

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
        }).catch(next)
})















// `[POST] /api/cars` returns the created car.
router.post('/', (req, res) => {

})


exports = module.exports = router;



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