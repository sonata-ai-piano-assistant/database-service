module.exports = (mongoose) => {
  const performanceSchema = new mongoose.Schema({
    startedAt: { type: Date, required: true, default: Date.now },
    endedAt: { type: Date },
    section: {
      type: String,
      enum: ["intro", "verse", "chorus", "bridge", "outro"],
      required: true
    },
    midiNotes: [{ note: Number, velocity: Number, time: Number }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true
    },
    feedback: {
      score: Number,
      comments: String,
      details: mongoose.Schema.Types.Mixed // for any extra analysis data
    }
  })
  return mongoose.model("Performance", performanceSchema)
}
