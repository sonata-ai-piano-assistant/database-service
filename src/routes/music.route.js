const express = require("express")
const fs = require("fs")
const path = require("path")

const router = express.Router()

const musicDir = path.join(__dirname, "../music")

// GET /music - returns a list of available .mid files
router.get("", async (req, res) => {
  fs.readdir(musicDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read music directory" })
    }
    const musicList = files
      .filter((file) => file.endsWith(".mid"))
      .map((file, idx) => ({
        id: idx + 1,
        filename: file,
        url: `/music/${file}`
      }))
    res.json(musicList)
  })
})
// GET /music/:name - streams the requested .mid file by name
router.get("/:name", (req, res) => {
  const fileName = req.params.name
  const filePath = path.join(musicDir, fileName + ".mid")

  // Security: prevent path traversal
  if (fileName.includes("..")) {
    return res.status(400).json({ error: "Invalid file name" })
  }

  res.setHeader("Content-Type", "audio/midi")
  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
  readStream.on("error", () => {
    res.status(500).end()
  })
})

module.exports = router
