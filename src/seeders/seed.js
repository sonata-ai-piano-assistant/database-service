const { execSync } = require("child_process")

async function runSeeders() {
  try {
    console.log("Seeding references...")
    execSync("node src/seeders/reference.seed.js", { stdio: "inherit" })
    console.log("Seeding sessions...")
    execSync("node src/seeders/session.seed.js", { stdio: "inherit" })
    console.log("Seeding performances...")
    execSync("node src/seeders/performance.seed.js", { stdio: "inherit" })
    console.log("All seeders completed!")
  } catch (error) {
    console.error("Seeding failed:", error)
    process.exit(1)
  }
}

if (require.main === module) {
  runSeeders()
}
