const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, enum: ["email", "sms"], required: true },
    channel: {
      type: String,
      enum: ["registration", "password_reset"],
      required: true
    },
    to: { type: String, required: true },
    content: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "sent", "delivered", "failed"],
      default: "pending"
    },
    error: { type: String },
    consent: { type: Boolean, required: true },
    unsubscribeToken: { type: String },
    meta: { type: Object }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Notification", notificationSchema)
