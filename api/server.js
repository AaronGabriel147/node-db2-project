const express = require("express");
const server = express();
server.use(express.json());

const carsRouter = require("./cars/cars-router");
server.use("api/cars", carsRouter);


server.get('/', (req, res) => { // Sanity check to connect to browser or HTTP client.
    // res.send("<h1>Welcome to the API!</h1>");
    res.status(200).json({
        status: 200,
        message: 'Connected to API',
        time: new Date().toLocaleString()
    })
})


server.use(errorHandling) // will trap "".catch/500 errors" happening above


module.exports = server;


// *catch all 500 errors middleware* 
function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        status: 500
    })
}