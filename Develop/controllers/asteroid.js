const router = require("express").Router()

let locals

router.get("/", async (req, res) => {
  try{
    locals = {
      isLoggedIn: false,
      lightYears: req.session.lightYears,
      textEventTitle: "Asteroid",
      textEventParagraph: "A single asteroid approaches your location. If you do nothing you will be hit.",
      option1: "Go to the left of the asteroid.",
      option2: "Go to the right of the asteroid.",
      crew: req.session.crew,
      fuel: req.session.fuel,
      food: req.session.food
    }
    res.render("asteroid", locals)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

function options(req){
  locals.lightYears -= 1
  locals.option1 = "Continue"
  locals.option2 = "Continue"
  locals.fuel -= 1
  locals.food -= 1

  // Set session
  req.session.lightYears -= 1
  req.session.fuel -= 1
  req.session.food -= 1
}

router.get("/1", (req, res) => {
  options(req)
  locals.textEventParagraph = "You move left of the asteroid and get hit losing 1 crew member."
  locals.crew -= 1
  req.session.crew -= 1

  res.render("asteroid", locals)
})

router.get("/2", (req, res) => {
  options(req)
  locals.textEventParagraph = "You move right of the asteroid and pass by without any problems."

  res.render("asteroid", locals)
})

module.exports = router