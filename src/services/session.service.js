const mongoose = require("mongoose")
const db = require("../models")

const createSession = async (userId, sessionData) => {
  try {
    // Convert userId to ObjectId if needed
    const userObjectId = new mongoose.Types.ObjectId(userId)
    // Validate userId
    const user = await db.models.User.findById(userObjectId)
    if (!user) {
      throw new Error(`User with ID ${userId} not found`)
    }
    // Create a new session for the user
    const session = await db.models.Session.create({
      user: userObjectId,
      ...sessionData
    })
    return session
  } catch (error) {
    throw new Error(`Failed to create session: ${error.message}`)
  }
}

const addThreadIdToSession = async (sessionId, threadId) => {
  try {
    // Convert sessionId to ObjectId if needed
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    // Validate sessionId
    const session = await db.models.Session.findById(sessionObjectId)
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
    // Convert sessionId to ObjectId if needed
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    // Retrieve the session by ID
    const session = await db.models.Session.findById(sessionObjectId)
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
    // Convert userId to ObjectId if needed
    const userObjectId = new mongoose.Types.ObjectId(userId)
    // Validate userId
    const user = await db.models.User.findById(userObjectId)
    if (!user) {
      throw new Error(`User with ID ${userId} not found`)
    }
    // Retrieve all sessions for the user
    const sessions = await db.models.Session.find({
      user: userObjectId
    }).populate({
      path: "reference",
      select: "name"
    })
    return sessions
  } catch (error) {
    throw new Error(
      `Failed to retrieve sessions for user ${userId}: ${error.message}`
    )
  }
}

// End a session by setting endedAt
const endSession = async (sessionId) => {
  try {
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    const session = await db.models.Session.findById(sessionObjectId)
    if (!session) {
      throw new Error(`Session with ID ${sessionId} not found`)
    }
    session.endedAt = new Date()
    await session.save()
    return session
  } catch (error) {
    throw new Error(`Failed to end session: ${error.message}`)
  }
}

module.exports = {
  createSession,
  addThreadIdToSession,
  getSessionById,
  getSessionsByUserId,
  endSession
}
