const db = require("../models")
const performanceService = require("../services/performance.service")

// Get all performances for a session
const getPerformancesBySessionId = async (req, res) => {
  try {
    const { sessionId } = req.params
    const performances =
      await performanceService.getPerformancesBySessionId(sessionId)
    res.json(performances)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all performances for a session and section
const getSectionPerformancesForSession = async (req, res) => {
  try {
    const { sessionId, section } = req.params
    const performances =
      await performanceService.getSectionPerformancesForSession(
        sessionId,
        section
      )
    res.json(performances)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get latest performance for a user
const getLatestPerformanceByUser = async (req, res) => {
  try {
    const { userId } = req.params
    const performance =
      await performanceService.getLatestPerformanceByUser(userId)
    res.json(performance)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all performances for a user
const getPerformancesByUser = async (req, res) => {
  try {
    const { userId } = req.params
    const performances = await performanceService.getPerformancesByUser(userId)
    res.json(performances)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get latest performance for a user and section
const getLatestPerformanceByUserSessionAndSection = async (req, res) => {
  try {
    const { userId, sessionId, section } = req.params
    const performance =
      await performanceService.getLatestPerformanceByUserSessionAndSection(
        userId,
        sessionId,
        section
      )
    res.json(performance)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update feedback (score/comments) for a performance.
const updatePerformanceFeedback = async (req, res) => {
  try {
    const { performanceId } = req.params
    const { score, comments, details } = req.body

    const performance = await db.models.Performance.findByIdAndUpdate(
      performanceId,
      { feedback: { score, comments, details } },
      { new: true }
    )

    if (!performance) {
      return res.status(404).json({ error: "Performance not found" })
    }

    res.json(performance)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPerformancesBySessionId,
  getSectionPerformancesForSession,
  getLatestPerformanceByUser,
  getPerformancesByUser,
  getLatestPerformanceByUserSessionAndSection,
  updatePerformanceFeedback
}
