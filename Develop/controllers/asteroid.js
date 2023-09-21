const router = require("express").Router()

let locals = {
  isLoggedIn: false,
  lightYears: 99,
  textEventTitle: "Asteroid",
  textEventParagraph: "A single asteroid approaches your location. If you do nothing you will be hit.",
  option1: "Go to the left of the asteroid.",
  option2: "Go to the right of the asteroid.",
  crew: 100,
  fuel: 50,
  food: 1000
}

router.get("/", async (req, res) => {
  try{
    res.setHeader("Pragma", "no-cache").render("asteroid", locals)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

router.post("/", (req, res) => {
  const option = req.query.option
  switch(option){
    case "1":
      locals.textEventTitle = ""
      locals.textEventParagraph = "You move left of the asteroid and get hit losing 1 crew member."
      locals.fuel = locals.fuel - 1
      locals.crew = locals.crew - 1
      locals.food = locals.food - 1
      res.render("asteroid", locals)
      break
    case "2":
      console.log("option 2")
      res.send(200)
      break
  }
})


module.exports = router