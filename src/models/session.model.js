module.exports = (mongoose) => {
  const midiNoteSchema = new mongoose.Schema(
    {
      note: { type: Number, required: true },
      velocity: { type: Number, required: true },
      time: { type: Number, required: true }
    },
    { _id: false }
  )

  const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reference",
      required: true
    },
    performances: [
      {
        type: Map, //"intro", "verse","chorus", "bridge","outro"
        of: [[midiNoteSchema]],
        default: {}
      }
    ],
    threadId: { type: String },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date }
  })

  return mongoose.model("Session", sessionSchema)
}
