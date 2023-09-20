const router = require("express").Router()

router.get("/", async (req, res) => {
  try{
    res.render("intro",{
      isLoggedIn: false,
      crew: 10,
      energy: 50,
      foodAndWater: 100
    })
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})


module.exports = router