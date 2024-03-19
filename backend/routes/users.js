const express = require ('express');

const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken')

const { updateUser, getUser, getUsers, deleteUser} = require('../controllers/user');

const router = express.Router()

//router.get("/checkauthentication", verifyToken, (req, res, next) =>{
    //res.send("hello user, you are logged in")
//})

//UPDATE
router.put("/:id", verifyUser, updateUser)
//DELETE
router.delete("/:id", verifyUser, deleteUser)
//GET
router.get("/:id", verifyUser,getUser)
//GET ALL
router.get("/", verifyAdmin,getUsers)

module.exports = router;