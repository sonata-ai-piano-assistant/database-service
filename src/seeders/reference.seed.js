require("dotenv").config()
const mongoose = require("mongoose")
const env = require("../config/env")
const db = require("../models")

async function seedReferences() {
  await mongoose.connect(env.database_uri)

  // Example reference document with sections
  const reference = await db.models.Reference.create({
    name: "Für Elise - Intro",
    sections: {
      intro: [
        { note: 60, velocity: 90, time: 0 },
        { note: 62, velocity: 88, time: 1 }
      ],
      verse: [{ note: 64, velocity: 85, time: 2 }],
      chorus: [
        { note: 65, velocity: 85, time: 2 },
        { note: 67, velocity: 87, time: 3 }
      ],
      bridge: [],
      outro: []
    }
  })

  console.log("Seeded reference:", reference)
  await mongoose.disconnect()
}

if (require.main === module) {
  seedReferences().catch(console.error)
}
