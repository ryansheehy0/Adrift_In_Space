const router = require("express").Router()
const asteroid = require("./asteroid")

router.use("/asteroid", asteroid)

router.get("/", async (req, res) => {
  try{
    res.render("intro",{
      isLoggedIn: false,
      lightYears: 100,
      textEventTitle: "Home Planet",
      textEventParagraph: "This is your home planet. Your goal is to survive and get home.",
      option1: "Option 1",
      option2: "Option 2",
      crew: 100,
      fuel: 50,
      food: 1000
    })
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})


module.exports = router