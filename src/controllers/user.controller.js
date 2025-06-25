const userService = require("../services/user.service")

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

module.exports = { getUserById, createUser }
