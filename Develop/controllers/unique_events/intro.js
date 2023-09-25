const router = require("express").Router()
const {User, GameState} = require("../../models/index")

router.get("/", async (req, res) => {
  try{
    const lightYears = 25
    const crew = 25
    const fuel = 25
    const food = 25

    req.session.lightYears = lightYears
    req.session.crew = crew
    req.session.fuel = fuel
    req.session.food = food

    let locals = {
      isLoggedIn: Boolean(req.session.loggedInUser),
      lightYears,
      textEventTitle: "Home Planet",
      textEventParagraph: "You are an AI captain of an adrift space ship trying to keep your crew alive and get back to your home planet. For each event you are given 2 options. Each option will result in outcomes which can be good, bad, or neutral. If you have no more crew you loose. If your food gets to 0 your crew slowly dies. In order to get closer to your home you need fuel. If your fuel goes to 0 you have to wait for an event to get more fuel. Good luck and may you make it back home.",
      option1: "Option 1: Continue",
      option2: "Option 2: Continue",
      crew,
      fuel,
      food
    }

    res.render("intro", locals)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router