const router = require("express").Router()
const intro = require("./intro")
const asteroidEvent = require("./events/asteroid")
const barrenPlanetEvent = require("./events/barren_planet")
const astronautEvent = require("./events/astronaut")

router.use("astronaut", astronautEvent.getRouter())
router.use("/asteroid", asteroidEvent.getRouter())
router.use("/barren_planet", barrenPlanetEvent.getRouter())
router.use("/intro", intro)

router.get("/", (req, res) => {
  try{
    const prevPath = req.headers.referer || "/"

    if(prevPath.includes("intro")){
      req.session.currentEvent = "asteroid"
      res.redirect("/asteroid")
    }else if(prevPath.includes("asteroid")){
      req.session.currentEvent = "barren_planet"
      res.redirect("/barren_planet")
    }
      else if(prevPath.includes("barren_planet")){
        req.session.currentEvent = "astronaut"
        res.redirect("/astronaut")
      }
    else{
      req.session.currentEvent = "intro"
      res.redirect("/intro")
    }

  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router