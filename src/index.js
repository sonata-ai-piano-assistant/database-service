const express = require("express")
const cors = require("cors")
const {
  initializeMetrics,
  metricsRouter,
  metricsMiddleware
} = require("./utils/metrics")
const apiRouter = require("./routes")
const { port } = require("./config/env")
const db = require("./models")
const loggerMiddleware = require("./middlewares/logger.middleware")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// 🔧 INITIALISATION DES MÉTRIQUES
initializeMetrics("database")

// 📊 MIDDLEWARE MÉTRIQUES
app.use(metricsMiddleware)
app.use(loggerMiddleware)
// 🛣️ ROUTES MÉTRIQUES
app.use(metricsRouter)

app.get("/", (_, res) => {
  res.send("Welcome to the API")
})
app.use("/api", apiRouter)

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`)
  // Connect to the database
  await db.connectDB()
})
