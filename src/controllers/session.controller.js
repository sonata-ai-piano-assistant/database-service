const sessionService = require("../services/session.service")
const performanceService = require("../services/performance.service")
// Create a new session
const createSession = async (req, res, next) => {
  try {
    const { userId, ...sessionData } = req.body
    const session = await sessionService.createSession(userId, sessionData)
    res.status(201).json(session)
  } catch (error) {
    next({
      status: 500,
      message: "Failed to create session"
    })
  }
}

// Add threadId to a session
const addThreadIdToSession = async (req, res, next) => {
  try {
    const { sessionId } = req.params
    const { threadId } = req.body
    const session = await sessionService.addThreadIdToSession(
      sessionId,
      threadId
    )
    res.json(session)
  } catch (error) {
    next({
      status: 500,
      message: "Failed to add thread ID to session"
    })
  }
}

// Get session by ID
const getSessionById = async (req, res, next) => {
  try {
    const { sessionId } = req.params
    const session = await sessionService.getSessionById(sessionId)
    res.json(session)
  } catch (error) {
    next({
      status: 404,
      message: "Session not found"
    })
  }
}

// Get all user performances for a session, grouped by section
const getPerformancesByUserAndSession = async (req, res, next) => {
  try {
    const { userId, sessionId } = req.params
    const result = await performanceService.getPerformancesByUserAndSession(
      userId,
      sessionId
    )
    res.json(result)
  } catch (error) {
    next({
      status: 500,
      message: "Failed to retrieve performances"
    })
  }
}

module.exports = {
  createSession,
  addThreadIdToSession,
  getSessionById,
  getPerformancesByUserAndSession
}
