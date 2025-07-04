module.exports = (mongoose) => {
  const subscriptionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stripeSubscriptionId: { type: String, required: true, unique: true },
    plan: { type: String, enum: ["basic", "premium", "pro"], required: true },
    status: {
      type: String,
      required: true,
      enum: [
        "active",
        "canceled",
        "past_due",
        "unpaid",
        "incomplete",
        "incomplete_expired",
        "trialing",
        "paused",
        "expired"
      ]
    },
    currentPeriodEnd: { type: Date },
    createdAt: { type: Date, default: Date.now }
  })

  return mongoose.model("Subscription", subscriptionSchema)
}
