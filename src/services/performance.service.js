const mongoose = require("mongoose")
const db = require("../models")

/**
 * Retrieve all performances for a given session ID.
 * @param {string} sessionId - The ID of the session.
 * @returns {Promise<Array>} - Array of performance documents.
 */
const getPerformancesBySessionId = async (sessionId) => {
  try {
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    // Validate sessionId
    const session = await db.models.Session.findById(sessionObjectId)
    if (!session) {
      throw new Error(`Session with ID ${sessionId} not found`)
    }
    // Find performances referencing this session
    const performances = await db.models.Performance.find({
      session: sessionObjectId
    })
    return performances
  } catch (error) {
    throw new Error(`Failed to retrieve performances: ${error.message}`)
  }
}

/**
 * Retrieve all performances for a given session and section (e.g., "intro", "verse").
 * @param {string} sessionId - The ID of the session.
 * @param {string} section - The section of the song (e.g., "intro").
 * @returns {Promise<Array>} - Array of performance documents for the section.
 */
const getSectionPerformancesForSession = async (sessionId, section) => {
  try {
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    // Find performances referencing this session and section
    const performances = await db.models.Performance.find({
      session: sessionObjectId,
      section
    })
    return performances.map((perf) => ({
      performanceId: perf._id,
      startedAt: perf.startedAt,
      endedAt: perf.endedAt,
      midiNotes: perf.midiNotes
    }))
  } catch (error) {
    throw new Error(
      `Failed to retrieve performances for section: ${error.message}`
    )
  }
}

/**
 * Retrieve the latest performance for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object|null>} - The latest performance document or null.
 */
const getLatestPerformanceByUser = async (userId) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId)
    const performance = await db.models.Performance.findOne({
      user: userObjectId
    })
      .sort({ endedAt: -1 })
      .exec()
    return performance
  } catch (error) {
    throw new Error(`Failed to retrieve latest performance: ${error.message}`)
  }
}

/**
 * Retrieve all performances for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - Array of performance documents.
 */
const getPerformancesByUser = async (userId) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId)
    return await db.models.Performance.find({ user: userObjectId }).exec()
  } catch (error) {
    throw new Error(`Failed to retrieve performances: ${error.message}`)
  }
}

/**
 * Retrieve the latest performance for a given user and section.
 * @param {string} userId - The ID of the user.
 * @param {string} section - The section of the song.
 * @returns {Promise<Object|null>} - The latest performance document or null.
 */
const getLatestPerformanceByUserSessionAndSection = async (
  userId,
  sessionId,
  section
) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId)
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    return await db.models.Performance.findOne({
      user: userObjectId,
      session: sessionObjectId,
      section
    })
      .sort({ endedAt: -1 })
      .exec()
  } catch (error) {
    throw new Error(
      `Failed to retrieve latest performance for section: ${error.message}`
    )
  }
}

// Retreive all user performances for a session and group by section
const getPerformancesByUserAndSession = async (userId, sessionId) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId)
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId)
    const session = await db.models.Session.findById(sessionObjectId)
    if (!session) {
      throw new Error(`Session with ID ${sessionId} not found`)
    }
    // Validate userId
    const user = await db.models.User.findById(userObjectId)
    if (!user) {
      throw new Error(`User with ID ${userId} not found`)
    }
    // Find performances for the user in the session
    const performancesFound = await db.models.Performance.find({
      user: userObjectId,
      session: sessionObjectId
    }).lean()
    // Group performances by section
    const performances = performancesFound.reduce((acc, performance) => {
      const section = performance.section
      if (!acc[section]) {
        acc[section] = []
      }
      acc[section].push(performance)
      return acc
    }, {})

    // return session details along with grouped performances
    return {
      session: {
        id: session._id,
        name: session.name,
        startedAt: session.startedAt,
        endedAt: session.endedAt
      },
      performances
    }
  } catch (error) {
    throw new Error(
      `Failed to retrieve performances for user and session: ${error.message}`
    )
  }
}
module.exports = {
  getPerformancesBySessionId,
  getSectionPerformancesForSession,
  getLatestPerformanceByUser,
  getPerformancesByUser,
  getLatestPerformanceByUserSessionAndSection,
  getPerformancesByUserAndSession
}
