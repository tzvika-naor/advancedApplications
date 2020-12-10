const express = require('express');
const router = express.Router();
const CarsController = require('../controllers/cars');


router.get("", CarsController.getCars); //all cars
router.get("/:id",CarsController.getCar); // single car
router.post("", CarsController.createCar); // add a new car to the database
router.put("/:id", CarsController.updateCar); //update an existing car
router.delete("/:id", CarsController.deleteCar);

module.exports = router;