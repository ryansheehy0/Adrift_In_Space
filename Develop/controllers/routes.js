// Other imports
const router = require("express").Router()
const saveSession = require("../utils/saveSession")

// Unique Events
const intro = require("./unique_events/intro")

router.use("/intro", intro)

// Events
const asteroidEvent = require("./events/asteroid")
const barrenPlanetEvent = require("./events/barren_planet")
const blackHoleEvent = require("./events/black_hole")
const blueStarEvent = require("./events/blue_star")
const crystalAsteroidEvent = require("./events/crystal_asteroid")

router.use("/asteroid", asteroidEvent.getRouter())
router.use("/barren_planet", barrenPlanetEvent.getRouter())
router.use("/black_hole", blackHoleEvent.getRouter())
router.use("/blue_star", blueStarEvent.getRouter())
router.use("/crystal_asteroid", crystalAsteroidEvent.getRouter())

// Account paths
const login = require("./login")
const signup = require("./signup")
const logout = require("./logout")

router.use("/login", login)
router.use("/signup", signup)
router.use("/logout", logout)

router.get("/", (req, res) => {
  try{
    // If user logged in save current state
    if(Boolean(req.session.loggedInUser)){
      saveSession(req.session, req.session.loggedInUser)
    }

    const prevPath = req.headers.referer || "/"

    if(prevPath.includes("intro")){
      req.session.currentEvent = "asteroid"
      res.redirect("/asteroid")
    }else if(prevPath.includes("asteroid")){
      req.session.currentEvent = "barren_planet"
      res.redirect("/barren_planet")
    }else if(prevPath.includes("barren_planet")){
      req.session.currentEvent = "black_hole"
      res.redirect("/black_hole")
    }else if(prevPath.includes("black_hole")){
      req.session.currentEvent = "blue_star"
      res.redirect("/blue_star")
    }else if(prevPath.includes("blue_star")){
      req.session.currentEvent = "crystal_asteroid"
      res.redirect("/crystal_asteroid")
    }else{
      req.session.currentEvent = "intro"
      res.redirect("/intro")
    }

  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router