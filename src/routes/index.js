const express = require("express")
const router = express.Router()
const userRouter = require("./user.route")
const errorHandlingMiddleware = require("../middlewares/errorHandling")

router.use("/users", userRouter)

router.use(errorHandlingMiddleware)

module.exports = router
