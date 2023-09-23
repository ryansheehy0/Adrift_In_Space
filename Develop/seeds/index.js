const seedUsers = require("./seedUsers")
const seedGameState = require("./seedGameState")

async function seedAll(){
  await seedUsers()
  await seedGameState()
}

seedAll()