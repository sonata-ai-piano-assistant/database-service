require("dotenv").config()
const mongoose = require("mongoose")
const env = require("../config/env")
const db = require("../models")

async function seedPerformances() {
  await mongoose.connect(env.database_uri)
  const userId = "682b0ab77ae948c4704d153b"

  // Find a session for this user
  const session = await db.models.Session.findOne({ user: userId })
  if (!session) throw new Error("No session found for user")

  // Example performances for different sections
  const performances = [
    {
      user: userId,
      session: session._id,
      section: "intro",
      midiNotes: [
        { note: 60, velocity: 90, time: 0 },
        { note: 62, velocity: 88, time: 1 }
      ],
      startedAt: new Date(),
      endedAt: null,
      feedback: {
        score: 80,
        comments: "Good start!",
        details: { timing: "ok" }
      }
    },
    {
      user: userId,
      session: session._id,
      section: "chorus",
      midiNotes: [
        { note: 65, velocity: 85, time: 2 },
        { note: 67, velocity: 87, time: 3 }
      ],
      startedAt: new Date(),
      endedAt: null,
      feedback: {
        score: 90,
        comments: "Excellent chorus!",
        details: { timing: "great" }
      }
    }
  ]

  const result = await db.models.Performance.insertMany(performances)
  console.log("Seeded performances:", result)
  await mongoose.disconnect()
}

if (require.main === module) {
  seedPerformances().catch(console.error)
}
