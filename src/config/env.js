const dotenv = require("dotenv")
const path = require("path")

const environment = process.env.NODE_ENV || "dev"

const envFilePath = path.resolve(__dirname, `../../.env.${environment}`)

dotenv.config({ path: envFilePath })

const { PORT, DATABASE_URI, HASH } = process.env
if (!PORT || !DATABASE_URI || !HASH) {
  throw new Error("Missing required environment variables")
}
module.exports = {
  port: PORT,
  database_uri: DATABASE_URI,
  hash: HASH
}
