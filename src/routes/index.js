const express = require("express")
const router = express.Router()
const userRouter = require("./user.route")
const performanceRouter = require("./performance.route")
const sessionRouter = require("./session.route")
const subscriptionRouter = require("./subscription.route")
const errorHandlingMiddleware = require("../middlewares/errorHandling")

router.use("/users", userRouter)
router.use("/performances", performanceRouter)
router.use("/sessions", sessionRouter)
router.use("/subscriptions", subscriptionRouter)

router.use(errorHandlingMiddleware)

module.exports = router
