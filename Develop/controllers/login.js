const router = require("express").Router()
const bcrypt = require("bcrypt")
const saveSession = require("../utils/saveSession")
const {User, GameState} = require("../models/index")

router.post("/", async (req, res) => {
  // Get username and password
  const username = req.body.username
  const password = req.body.password

  // See if there is a username
  const user = await User.findOne({where: {username}})
  if(!user){res.sendStatus(404); return;}

  // Get db hashed password
  const dbHashedPass = user.password

  // Compare if hashed input password to db password
  const isPass = await bcrypt.compare(password, dbHashedPass)

  // Check if it's the right password
  if(!isPass){res.sendStatus(404); return;}

  // Set session to user id
  req.session.loggedInUser = user.id

  // Save current session data in the db
  saveSession(req.session, user.id)

  // Send successfully logged in json
  res.sendStatus(200)
})

module.exports = router