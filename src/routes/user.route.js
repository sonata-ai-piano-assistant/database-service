const express = require("express")
const router = express.Router()

const userController = require("../controllers/user.controller")

// Route to create a new user
router.post("/", userController.createUser)

// Route to find user by identifier
router.post("/find", userController.getUserByIdentifier)
// Route to find user by email or OAuth provider
router.post("/find/oauth", userController.findUserByEmailOrOAuth)
//Route to verify user credentials
router.post("/verify", userController.verifyUserCredentials)

// Route to get user by ID
router.get("/:id", userController.getUserById)

module.exports = router
