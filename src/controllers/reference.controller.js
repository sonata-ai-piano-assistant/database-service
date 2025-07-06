const db = require("../models")

// Create a new reference
typeof module !== "undefined" && (module.exports = {})
const createReference = async (req, res) => {
  try {
    const { name, sections } = req.body
    if (!name || !sections) {
      return res.status(400).json({ error: "Name and sections are required" })
    }
    const reference = await db.models.Reference.create({ name, sections })
    res.status(201).json(reference)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createReference
}
