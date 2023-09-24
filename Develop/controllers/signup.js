const router = require("express").Router()
const saveSession = require("../utils/saveSession")
const bcrypt = require("bcrypt")
const {User, GameState} = require("../models/index")

router.post("/", async (req, res) => {
  // Get username and password
  const username = req.body.username
  const password = req.body.password

  // Check if there isn't a username already created
  let user = await User.findOne({where: {username}})
  if(user){res.sendStatus(500); return;}

  // Make hashed password
  const saltRounds = 14
  const hashedPassword = await bcrypt.hash(password, saltRounds)

  // Create a new user
  await User.create({
    username,
    password: hashedPassword
  })

  // Login in newly created user
  // Get the newly created user
  user = await User.findOne({where: {username}})
  if(!user){res.sendStatus(500); return;}
  // Set session to user id
  req.session.loggedInUser = user.id
  // Save current session data in the db
  saveSession(req.session, user.id)

  // Send back success code
  res.sendStatus(200)
})

module.exports = router