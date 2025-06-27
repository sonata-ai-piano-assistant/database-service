const express = require("express")
const router = express.Router()
const performanceController = require("../controllers/performance.controller")

// Get all performances for a session
router.get(
  "/session/:sessionId",
  performanceController.getPerformancesBySessionId
)

// Get all performances for a session and section
router.get(
  "/session/:sessionId/section/:section",
  performanceController.getSectionPerformancesForSession
)

// Get latest performance for a user
router.get(
  "/user/:userId/latest",
  performanceController.getLatestPerformanceByUser
)

// Get all performances for a user
router.get("/user/:userId", performanceController.getPerformancesByUser)

// Get latest performance for a user and section
router.get(
  "/user/:userId/session/:sessionId/section/:section/latest",
  performanceController.getLatestPerformanceByUserSessionAndSection
)

// Update feedback (score/comments) for a performance
router.patch(
  "/:performanceId/feedback",
  performanceController.updatePerformanceFeedback
)

module.exports = router
