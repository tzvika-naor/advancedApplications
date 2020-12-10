
const Car = require('../models/car');


exports.getCars = (req, res, next) =>
{
    const CarQuery = Car.find();//return all the Cars
    CarQuery.then(documents => {
        console.log(documents)
        fetchedCars = documents;
        return Car.count() // returns all the number of that match query from this database... we made no filtering so we got all 100 cars
    }).then(count => {
        console.log(count)
        res.status(200).json({
            message: 'cars fetch succesfully!',
            cars: fetchedCars,
            maxCars: count
        })
    })

}
exports.getCar = (req, res, next) =>
 {
    console.log(req.params.id)
    Car.findById(req.params.id).then(car => {
        console.log(car)
        if (car) {
            res.status(200).json(car)
        } else {
            res.status(404).json({ message: 'Car not found!' });
        }
    }).catch(error => {
        res.status(500).json({
            message: 'Fetching posts failed!'
        });
    });
};

exports.createCar = (req, res, next) =>
{
    const url = req.protocol + '://' + req.get("host");
    const car = new Car({
        manufacturer: req.body.manufacturer,
        modal: req.body.modal,
        year: req.body.year,
        plate: req.body.plate,
        class: req.body.class,
        imageUrl: req.body.imageUrl
    });
    car.save().then(createdCar =>
    {
        res.status(201).json({
            message: "car added successfully",
            car: {
                id: createdCar._id,
                manufacturer: createdCar.manufacturer,
                modal: createdCar.modal,
                year: createdCar.year,
                plate: createdCar.plate,
                class: createdCar.class,
                imageUrl: createdCar.imageUrl
            }
        });
    })
        .catch(error =>
        {
            res.status(500).json({
                message: 'Creating a Car failed!'
            });
        });
};
exports.updateCar = (req, res, next) =>
{
   
    console.log(req.body)
    const car = new Car({
        _id: req.body._id,
        manufacturer: req.body.manufacturer,
        modal: req.body.modal,
        year: req.body.year,
        plate: req.body.plate,
        type: req.body.type,
        imageUrl: req.body.imageUrl
    });
    Car.updateOne( {_id: req.params.id } , car).then(result => {
        if (result.n > 0) {
            res.status(200).json({
                message: "update successful!"
            })
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    });
}
exports.deleteCar = (req, res, next) =>
{
    Car.deleteOne({ _id: req.params.id }).then(result => {
        if (result.n > 0) {
            res.status(200).json({
                message: "Deletion successful!"
            })
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    })
        .catch(error => {
            res.status(500).json({
                message: "Fetching posts failed!"
            });
        });
}
