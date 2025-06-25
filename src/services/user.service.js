const bcrypt = require("bcrypt")
const db = require("../models")

/** * Creates a new user in the database.
 * @param {Object} user - The user data to create.
 * @param {string} user.firstname - The first name of the user.
 * @param {string} user.lastname - The last name of the user.
 * @param {string} user.username - The username of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the created user.
 */
const createUser = async (user) => {
  try {
    // hash the user's password
    if (user.password) {
      user.password = await bcrypt.hash(user.password, Number(process.env.HASH))
    }
    // Create a new user
    const newUser = new db.models.User(user)
    // Save the user to the database
    await newUser.save()
    // Return the new user
    return newUser
  } catch (error) {
    console.log(`Error creating user: ${error.message}`)
    throw error
  }
}

/** * Retrieves a user by their username or email.
 * @param {string} identifier - The username or email of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user object if found, or null if not found.
 */
const getUserByIdentifier = async (identifier) => {
  try {
    // Get the user by identifier (username or email)
    const user = await db.models.User.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    })
    return user
  } catch (error) {
    console.log(`Error fetching user by identifier: ${error.message}`)
    throw error
  }
}
/**
 * Retrieves a user by their ID.
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user object if found,
 */
const getUserById = async (id) => {
  try {
    // Get the user by ID
    const user = await db.models.User.findById(id).select("-password")
    if (!user) {
      throw new Error(`User with ID ${id} not found`)
    }
    return user
  } catch (error) {
    console.log(`Error fetching user by ID: ${error.message}`)
    throw error
  }
}

/**
 * Finds a user by email or by OAuth provider and profile ID.
 * @param {string} email - The user's email.
 * @param {string} provider - The OAuth provider name.
 * @param {string} oauthId - The OAuth profile ID.
 * @returns {Promise<Object|null>} - The found user or null.
 */
const findUserByEmailOrOAuth = async (email, provider, oauthId) => {
  return await db.models.User.findOne({
    $or: [
      { email },
      {
        oauthAccounts: {
          $elemMatch: {
            provider,
            oauthId
          }
        }
      }
    ]
  })
}

module.exports = {
  createUser,
  getUserByIdentifier,
  getUserById,
  findUserByEmailOrOAuth
}
