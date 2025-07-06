const Notification = require("../models/notification.model")

exports.createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body)
    res.status(201).json(notification)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateNotification = async (req, res) => {
  try {
    const { id } = req.params
    const notification = await Notification.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!notification)
      return res.status(404).json({ error: "Notification not found" })
    res.json(notification)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.getNotification = async (req, res) => {
  try {
    const { id } = req.params
    const notification = await Notification.findById(id)
    if (!notification)
      return res.status(404).json({ error: "Notification not found" })
    res.json(notification)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.listNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 })
    res.json(notifications)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
