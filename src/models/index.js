"use strict"

const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose")
const process = require("process")
const basename = path.basename(__filename)
const config = require("../config/env")

const db = {}

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_uri, {
      connectTimeoutMS: 5000,
      socketTimeoutMS: 45000
    })
    console.log("MongoDB connection established successfully")
  } catch (err) {
    console.error("MongoDB connection error:", err)
    process.exit(1)
  }
}

const modelFiles = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf(".") !== 0 &&
    file !== basename &&
    file.slice(-3) === ".js" &&
    file.indexOf(".test.js") === -1
  )
})

modelFiles.forEach((file) => {
  const modelPath = path.join(__dirname, file)
  const model = require(modelPath)(mongoose)
  db[model.modelName] = model
})

db.models = mongoose.models
db.connectDB = connectDB

module.exports = db
