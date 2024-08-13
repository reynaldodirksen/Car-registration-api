const Car = require('./models');

// exports.getCars = async (req, res) => {
//     const cars = await Car.getAll();
//     res.json(cars);
// };


exports.getCarById = async (req, res) => {
    const response = await Car.getById(req.params.id);
    res.json(response);
};


exports.createCar = async (req, res) => {
    // console.log(req.body);
    const response = await Car.create(req.body);
    res.status(201).json(response);
};


exports.updateCar = async (req, res) => {
    const response = await Car.update(req.params.id, req.body);
    res.json(response);
};

exports.deleteCar = async (req, res) => {
    await Car.delete(req.params.id);
    res.status(204).end();
};
