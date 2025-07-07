const db = require("../models")
const Subscription = db.models.Subscription

exports.createOrUpdateSubscription = async (data) => {
  return Subscription.findOneAndUpdate(
    { stripeSubscriptionId: data.stripeSubscriptionId },
    data,
    { upsert: true, new: true }
  )
}

exports.deleteSubscription = async (stripeSubscriptionId) => {
  return Subscription.findOneAndDelete({ stripeSubscriptionId })
}

exports.getSubscriptionsByUserId = async (userId) => {
  return Subscription.find({
    userId: userId
  })
}
