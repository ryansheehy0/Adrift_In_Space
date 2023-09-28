const router = require("express").Router()
const {User, GameState} = require("../../models/index")

router.get("/", async (req, res) => {
  try{
    const lightYears = 14
    const crew = 5
    const fuel = 15
    const food = 10

    req.session.lightYears = lightYears
    req.session.crew = crew
    req.session.fuel = fuel
    req.session.food = food

    let locals = {
      isLoggedIn: Boolean(req.session.loggedInUser),
      lightYears,
      textEventTitle: "Home Planet",
      textEventParagraph: `
  You are an AI captain of an adrift space ship trying to keep your crew alive and get back to your home planet. 

  For each event you are given 2 options. Each option will result in outcomes which can be good, bad, or neutral. 

  With each turn, 1 food is consumed. If you have 0 food, 1 crew member dies. If you have 0 crew, you loose.

  If you have fuel, 1 fuel is consumed and you travel 1 light year closer to home. If you have 0 fuel, then you don't travel any closer to home and have to wait for a turn to get fuel.

  Good luck and may you make it back home.
`,
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