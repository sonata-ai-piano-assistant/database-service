const express = require("express")
const router = express.Router()
const referenceController = require("../controllers/reference.controller")

// Create a new reference
router.post("/", referenceController.createReference)

// Get a reference by ID
router.get("/:id", referenceController.getReferenceById)

module.exports = router
