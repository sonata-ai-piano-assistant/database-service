const mongoose = require("mongoose")

const midiNoteSchema = new mongoose.Schema(
  {
    note: { type: Number, required: true },
    velocity: { type: Number, required: true },
    time: { type: Number, required: true }
  },
  { _id: false }
)

const referenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sections: {
    intro: { type: [midiNoteSchema], default: [] },
    verse: { type: [midiNoteSchema], default: [] }, // "couplet" translated to "verse"
    chorus: { type: [midiNoteSchema], default: [] }, // "refrain" translated to "chorus"
    bridge: { type: [midiNoteSchema], default: [] }, // "pont" translated to "bridge"
    outro: { type: [midiNoteSchema], default: [] }
  }
})

module.exports = mongoose.model("Reference", referenceSchema)
