const bcrypt = require("bcrypt")
const User = require("../models/user.model")

const createUser = async (user) => {
  try {
    // hash the user's password
    if (user.password) {
      user.password = await bcrypt.hash(user.password, Number(process.env.HASH))
    }
    // Create a new user
    const newUser = new User(user)
    // Save the user to the database
    await newUser.save()
    // Return the new user
    return newUser
  } catch (error) {
    console.log(`Error creating user: ${error.message}`)
    throw error
  }
}

const getUserByIdentifier = async (identifier) => {
  try {
    // Get the user by identifier (username or email)
    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    })
    return user
  } catch (error) {
    console.log(`Error fetching user by identifier: ${error.message}`)
    throw error
  }
}

const getUserById = async (id) => {
  try {
    // Get the user by ID
    const user = await User.findById(id).select("-password")
    if (!user) {
      throw new Error(`User with ID ${id} not found`)
    }
    return user
  } catch (error) {
    console.log(`Error fetching user by ID: ${error.message}`)
    throw error
  }
}

module.exports = { createUser, getUserByIdentifier, getUserById }
