module.exports = (mongoose) => {

  const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reference",
      required: true
    },
    performances: [{ type: mongoose.Schema.Types.ObjectId, ref: "Performance" }],
    threadId: { type: String },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date }
  })

  return mongoose.model("Session", sessionSchema)
}
