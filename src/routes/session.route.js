const express = require("express")
const router = express.Router()
const sessionController = require("../controllers/session.controller")

// Create a new session
router.post("/", sessionController.createSession)

// Add threadId to a session
router.patch("/:sessionId/thread", sessionController.addThreadIdToSession)

// Get session by ID
router.get("/:sessionId", sessionController.getSessionById)

// Get all user performances for a session, grouped by section
router.get(
  "/:sessionId/user/:userId/performances",
  sessionController.getPerformancesByUserAndSession
)

module.exports = router
