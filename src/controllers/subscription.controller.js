const subscriptionService = require("../services/subscription.service")

exports.handleStripeSubscription = async (req, res) => {
  try {
    const subscription = await subscriptionService.createOrUpdateSubscription(
      req.body
    )
    res.status(200).json(subscription)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.deleteStripeSubscription = async (req, res) => {
  try {
    await subscriptionService.deleteSubscription(
      req.params.stripeSubscriptionId
    )
    res.status(204).send()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
