require("dotenv").config()
const mongoose = require("mongoose")
const env = require("../config/env")
const db = require("../models")

async function seedSessions() {
  await mongoose.connect(env.database_uri)

  const userId = "69a446edc605679337aa1435"

  // Find the reference seeded previously
  const reference = await db.models.Reference.findOne({
    name: "Für Elise - Beethoven"
  })
  if (!reference)
    throw new Error("Reference not found. Please seed references first.")

  // Example session using the real reference
  const session = await db.models.Session.create({
    user: userId,
    reference: reference._id,
    threadId: "thread-1",
    startedAt: new Date(),
    endedAt: null
  })

  console.log("Seeded session:", session)
  await mongoose.disconnect()
}

if (require.main === module) {
  seedSessions().catch(console.error)
}
