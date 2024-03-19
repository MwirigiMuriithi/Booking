const express = require ('express');
const { createHotel, updateHotel, getHotel, getHotels, deleteHotel, countByCity} = require('../controllers/hotel');

const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken')

const router = express.Router()
//CREATE
router.post("/", verifyAdmin,createHotel)
//UPDATE
router.put("/:id", verifyAdmin,updateHotel)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/countByCity", countByCity)
router.get("/CountByType", getHotels)
router.get("/", getHotels)

module.exports = router;