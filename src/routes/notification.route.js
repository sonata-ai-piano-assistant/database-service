const express = require("express")
const router = express.Router()
const notificationController = require("../controllers/notification.controller")

router.post("/", notificationController.createNotification)
router.patch("/:id", notificationController.updateNotification)
router.get("/:id", notificationController.getNotification)
router.get("/", notificationController.listNotifications)

module.exports = router
