const express = require("express")
const cors = require("cors")
const apiRouter = require("./routes")
const { port } = require("./config/env")
const db = require("./models")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (_, res) => {
  res.send("Welcome to the API")
})
app.use("/api", apiRouter)

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`)
  // Connect to the database
  await db.connectDB()
})
