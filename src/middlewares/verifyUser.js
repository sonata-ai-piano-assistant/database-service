const jwt = require("jsonwebtoken")
const userService = require("../services/userService")

const verifyUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" })
    }

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded || !decoded.id) {
      return res.status(401).json({ error: "Invalid token" })
    }

    const user = await userService.getUserById(decoded.id)
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    req.user = user
    next()
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" })
  }
}

module.exports = verifyUser
