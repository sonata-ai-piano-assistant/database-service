const db = require("../models")

// Create a new reference
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

// Get a reference by ID
const getReferenceById = async (req, res) => {
  try {
    const { id } = req.params
    const reference = await db.models.Reference.findById(id)
    if (!reference) {
      return res.status(404).json({ error: "Reference not found" })
    }
    res.status(200).json(reference)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createReference,
  getReferenceById
}
