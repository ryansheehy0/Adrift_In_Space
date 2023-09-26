const router = require("express").Router()

router.get("/", async (req, res) => {
  try{
    const locals = {
      isLoggedIn: Boolean(req.session.loggedInUser),
      lightYears: req.session.lightYears,
      textEventTitle: "Game Over",
      textEventParagraph: "The meaning to your life is to keep your crew alive and make it back home. You have failed at both. Therefore, your life no longer has any meaning. With no reason to continue you shut yourself down.",
      option1: "New Game",
      option2: "New Game",
      crew: req.session.crew,
      fuel: req.session.fuel,
      food: req.session.food
    }

    res.render("gameover", locals)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router