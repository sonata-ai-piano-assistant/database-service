const userService = require("../services/user.service")
const subscriptionService = require("../services/subscription.service")

const createUser = async (req, res, next) => {
  try {
    // Get the user data from the request
    const { firstname, lastname, username, email, password } = req.body
    // Check if the user already exists
    const existingUser =
      (await userService.getUserByIdentifier(username)) ||
      (await userService.getUserByIdentifier(email))
    // If the user already exists, return an error
    if (existingUser) {
      return next({
        status: 409,
        message: "User already exists"
      })
    }
    // Create a new user
    const user = await userService.createUser({
      firstname,
      lastname,
      username,
      email,
      password
    })
    // Save the user to the database
    await user.save()

    // Return the user
    return res.status(201).json({
      data: user.sanitize()
    })
  } catch (error) {
    // If there is an error, return an error
    return next({
      status: 500,
      message: error.message
    })
  }
}

const getUserById = async (req, res, next) => {
  // Get the user ID from the request
  const { id } = req.params
  // Get the user from the database
  const user = await userService.getUserById(id)

  // If the user is not found, return an error
  if (!user) {
    next({
      status: 404,
      message: `User with ID ${id} not found`
    })
  }

  // Return the user
  return res.json({
    data: user.sanitize()
  })
}

const getUserByIdentifier = async (req, res, next) => {
  try {
    const { identifier } = req.body
    // Get the user by identifier (username or email)
    const user = await userService.getUserByIdentifier(identifier)
    // If the user is not found, return an error
    if (!user) {
      return next({
        status: 404,
        message: `User with identifier ${identifier} not found`
      })
    }
    // Return the user
    return res.json({
      data: user
    })
  } catch (error) {
    // If there is an error, return an error
    return next({
      status: 500,
      message: error.message
    })
  }
}

const findUserByEmailOrOAuth = async (req, res, next) => {
  try {
    const { email, provider, oauthId } = req.body
    // Find the user by email or OAuth provider and profile ID
    const user = await userService.findUserByEmailOrOAuth(
      email,
      provider,
      oauthId
    )
    // If the user is not found, return an error
    if (!user) {
      return next({
        status: 404,
        message: `User with email ${email} or OAuth ID ${oauthId} not found`
      })
    }
    // Return the user
    return res.json({
      data: user
    })
  } catch (error) {
    // If there is an error, return an error
    return next({
      status: 500,
      message: error.message
    })
  }
}

const verifyUserCredentials = async (req, res, next) => {
  try {
    // Get the user data from the request
    const { identifier, password } = req.body
    // Check if the user exists
    const user = await userService.getUserByIdentifier(identifier)
    // If the user does not exist, return an error
    if (!user) {
      return next({
        status: 401,
        message: "Invalid credentials"
      })
    }
    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password)
    // If the password is incorrect, return an error
    if (!isPasswordValid) {
      return next({
        status: 401,
        message: "Invalid credentials"
      })
    }
    return res.status(200).json({
      data: user.sanitize()
    })
  } catch (error) {
    return next({
      status: 500,
      message: error.message
    })
  }
}

const getSubscriptionsByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params
    // Get the subscriptions by user ID
    const subscriptions =
      await subscriptionService.getSubscriptionsByUserId(userId)
    // If no subscriptions are found, return an error
    if (!subscriptions || subscriptions.length === 0) {
      return next({
        status: 404,
        message: `No subscriptions found for user with ID ${userId}`
      })
    }
    // Return the subscriptions
    return res.json({
      data: subscriptions
    })
  } catch (error) {
    // If there is an error, return an error
    return next({
      status: 500,
      message: error.message
    })
  }
}

module.exports = {
  getUserById,
  createUser,
  getUserByIdentifier,
  findUserByEmailOrOAuth,
  verifyUserCredentials,
  getSubscriptionsByUserId
}
