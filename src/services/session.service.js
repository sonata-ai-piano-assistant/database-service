const db = require("../models")

const createSession = async (userId, sessionData) => {
  try {
    // Validate userId
    const user = await db.models.User.findById(userId)
    if (!user) {
      throw new Error(`User with ID ${userId} not found`)
    }
    // Create a new session for the user
    const session = await db.models.Session.create({
      userId,
      ...sessionData
    })
    return session
  } catch (error) {
    throw new Error(`Failed to create session: ${error.message}`)
  }
}

const addThreadIdToSession = async (sessionId, threadId) => {
  try {
    // Validate sessionId
    const session = await db.models.Session.findById(sessionId)
    if (!session) {
      throw new Error(`Session with ID ${sessionId} not found`)
    }
    // Add threadId to the session
    session.threadId = threadId
    // Save the updated session
    await session.save()
    return session
  } catch (error) {
    throw new Error(`Failed to add thread ID to session: ${error.message}`)
  }
}

const getSessionById = async (sessionId) => {
  try {
    // Retrieve the session by ID
    const session = await db.models.Session.findById(sessionId)
    if (!session) {
      throw new Error(`Session with ID ${sessionId} not found`)
    }
    return session
  } catch (error) {
    throw new Error(`Failed to retrieve session: ${error.message}`)
  }
}

// Get all sessions for a user with a score
const getSessionsByUserId = async (userId) => {
  try {
    // Validate userId
    const user = await db.models.User.findById(userId)
    if (!user) {
      throw new Error(`User with ID ${userId} not found`)
    }
    // Retrieve all sessions for the user
    const sessions = await db.models.Session.find({ userId })
    return sessions
  } catch (error) {
    throw new Error(
      `Failed to retrieve sessions for user ${userId}: ${error.message}`
    )
  }
}

module.exports = {
  createSession,
  addThreadIdToSession,
  getSessionById,
  getSessionsByUserId
}
