const router = require("express").Router()
const bcrypt = require("bcrypt")
const {User, GameState} = require("../models/index")

router.post("/", async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  // Check if there isn't a username already created
  const user = await User.findOne({where: {username}})
  if(user){res.sendStatus(500); return;}

  // Make hashed password
  const saltRounds = 14
  const hashedPassword = await bcrypt.hash(password, saltRounds)

  // Create a new user
  await User.create({
    username,
    password: hashedPassword
  })

  // Send back success code
  res.sendStatus(200)
})

module.exports = router