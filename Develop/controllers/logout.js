const router = require("express").Router()

router.post("/", async (req, res) => {
  req.session.loggedInUser = null
  res.sendStatus(200)
})

module.exports = router