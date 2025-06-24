const express = require("express")
const router = express.Router()

const userController = require("../controllers/user.controller")

router.get("/:id", userController.getUserById)
router.post("/:id", userController.createUser)

module.exports = router
