const performanceService = require("../services/performance.service")

// Get all performances for a session
const getPerformancesBySessionId = async (req, res) => {
  try {
    const { sessionId } = req.params
    const performances = await performanceService.getPerformancesBySessionId(sessionId)
    res.json(performances)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all performances for a session and section
const getSectionPerformancesForSession = async (req, res) => {
  try {
    const { sessionId, section } = req.params
    const performances = await performanceService.getSectionPerformancesForSession(sessionId, section)
    res.json(performances)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get latest performance for a user
const getLatestPerformanceByUser = async (req, res) => {
  try {
    const { userId } = req.params
    const performance = await performanceService.getLatestPerformanceByUser(userId)
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
const getLatestPerformanceByUserAndSection = async (req, res) => {
  try {
    const { userId, section } = req.params
    const performance = await performanceService.getLatestPerformanceByUserAndSection(userId, section)
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
  getLatestPerformanceByUserAndSection
}
