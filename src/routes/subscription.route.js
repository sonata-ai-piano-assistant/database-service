const express = require("express")
const router = express.Router()
const controller = require("../controllers/subscription.controller")

router.post("/", controller.handleStripeSubscription)
router.delete("/:stripeSubscriptionId", controller.deleteStripeSubscription)

module.exports = router
