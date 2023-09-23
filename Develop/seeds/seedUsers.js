const User = require("../models/user")

function seedUsers(){
  User.bulkCreate([
    {
      username: "ryansheehy",
      password: "$2b$12$nOLSqkXJXQlC.hOzwCNDt.2bxJqpBu8bQysY5wKmV8sZAa3da.dke"
    },
    {
      username: "johndoe",
      password: "$2b$12$nOLSqkXJXQlC.hOzwCNDt.2bxJqpBu8bQysY5wKmV8sZAa3da.dke"
    },
  ])
}

module.exports = seedUsers