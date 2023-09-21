const router = require("express").Router()

router.get("/", (req, res) => {
  try{
    req.session.lightYears = 100
    req.session.crew = 100
    req.session.fuel = 100
    req.session.food = 100

    let locals = {
      isLoggedIn: false,
      lightYears: 100,
      textEventTitle: "Home Planet",
      textEventParagraph: "You are an AI captain of an adrift space ship trying to keep your crew alive and get back to your home planet. For each event you are given 2 options. Each option will result in outcomes which can be good, bad, or neutral. If you have no more crew you loose. If your food gets to 0 your crew slowly dies. In order to get closer to your home you need fuel. If your fuel goes to 0 you have to wait for an event to get more fuel. Good luck and may you make it back home.",
      option1: "Option 1: Continue",
      option2: "Option 2: Continue",
      crew: 100,
      fuel: 100,
      food: 100
    }

    res.render("intro", locals)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router