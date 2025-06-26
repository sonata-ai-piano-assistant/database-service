const db = require("../models")

/**
 * Retrieve all performances for a given session ID.
 * @param {string} sessionId - The ID of the session.
 * @returns {Promise<Array>} - Array of performance documents.
 */
const getPerformancesBySessionId = async (sessionId) => {
  try {
    // Validate sessionId
    const session = await db.models.Session.findById(sessionId)
    if (!session) {
      throw new Error(`Session with ID ${sessionId} not found`)
    }
    // Find performances referencing this session
    const performances = await db.models.Performance.find({ session: sessionId })
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
    // Find performances referencing this session and section
    const performances = await db.models.Performance.find({ session: sessionId, section })
    return performances.map(perf => ({
      performanceId: perf._id,
      startedAt: perf.startedAt,
      endedAt: perf.endedAt,
      midiNotes: perf.midiNotes
    }))
  } catch (error) {
    throw new Error(`Failed to retrieve performances for section: ${error.message}`)
  }
}

/**
 * Retrieve the latest performance for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object|null>} - The latest performance document or null.
 */
const getLatestPerformanceByUser = async (userId) => {
  try {
    const performance = await db.models.Performance.findOne({ user: userId })
      .sort({ endedAt: -1 })
      .exec();
    return performance;
  } catch (error) {
    throw new Error(`Failed to retrieve latest performance: ${error.message}`);
  }
}

/**
 * Retrieve all performances for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - Array of performance documents.
 */
const getPerformancesByUser = async (userId) => {
  try {
    return await db.models.Performance.find({ user: userId }).exec();
  } catch (error) {
    throw new Error(`Failed to retrieve performances: ${error.message}`);
  }
}

/**
 * Retrieve the latest performance for a given user and section.
 * @param {string} userId - The ID of the user.
 * @param {string} section - The section of the song.
 * @returns {Promise<Object|null>} - The latest performance document or null.
 */
const getLatestPerformanceByUserAndSection = async (userId, section) => {
  try {
    return await db.models.Performance.findOne({ user: userId, section })
      .sort({ endedAt: -1 })
      .exec();
  } catch (error) {
    throw new Error(`Failed to retrieve latest performance for section: ${error.message}`);
  }
}

module.exports = {
  getPerformancesBySessionId,
  getSectionPerformancesForSession,
  getLatestPerformanceByUser,
  getPerformancesByUser,
  getLatestPerformanceByUserAndSection
}
