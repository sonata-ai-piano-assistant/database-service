const sessionService = require("../services/session.service")
const performanceService = require("../services/performance.service")
// Create a new session
const createSession = async (req, res) => {
  try {
    const { userId, ...sessionData } = req.body
    const session = await sessionService.createSession(userId, sessionData)
    res.status(201).json(session)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Add threadId to a session
const addThreadIdToSession = async (req, res) => {
  try {
    const { sessionId } = req.params
    const { threadId } = req.body
    const session = await sessionService.addThreadIdToSession(
      sessionId,
      threadId
    )
    res.json(session)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get session by ID
const getSessionById = async (req, res) => {
  try {
    const { sessionId } = req.params
    const session = await sessionService.getSessionById(sessionId)
    res.json(session)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all user performances for a session, grouped by section
const getPerformancesByUserAndSession = async (req, res) => {
  try {
    const { userId, sessionId } = req.params
    const result = await performanceService.getPerformancesByUserAndSession(
      userId,
      sessionId
    )
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createSession,
  addThreadIdToSession,
  getSessionById,
  getPerformancesByUserAndSession
}
