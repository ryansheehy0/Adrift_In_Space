const router = require("express").Router()

router.get("/", async (req, res) => {
  try{
    const locals = {
      isLoggedIn: Boolean(req.session.loggedInUser),
      lightYears: req.session.lightYears,
      textEventTitle: "You Win",
      textEventParagraph: "You made it home with with your crew intact and fulfilled your mission. The crew members who died to allow you to make it home will not be forgotten.",
      option1: "New Game",
      option2: "New Game",
      crew: req.session.crew,
      fuel: req.session.fuel,
      food: req.session.food
    }

    res.render("youwin", locals)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router