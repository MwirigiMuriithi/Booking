const Hotel = require('../models/Hotels');

// create Hotel controller
const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};

// update hotel controller
const updateHotel = async (req, res, next) =>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},
            { new: true})
        res.status (200).json(updatedHotel)
        }catch(err){
        res.status(500).json(err)
    }
}

// delete hotel controller
const deleteHotel = async (req, res, next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status (200).json("Hotel has been deleted")
    } catch (err) {
        next(err);
    }
};

// get hotel controller
const getHotel = async (req, res,next) =>{
try{
    const hotel = await Hotel.findById(req.params.id)
    res.status (200).json(hotel)
} catch (err) {
        next(err);
    }
};

// get all hotels controllers
const getHotels = async (req, res, next) => {
    try{
        const hotels = await Hotel.find(req.query).limit(req.query.limit)
        res.status (200).json(hotels)
    }catch (err) {
        next(err);
    }
};
const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status (200).json(list)
    }catch (err) {
        next(err);
    }
};


module.exports = { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity }; // Export the function using CommonJS syntax
