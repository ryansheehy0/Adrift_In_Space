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
const futuristicShipEvent = require("./events/futuristic_ship")

router.use("/asteroid", asteroidEvent.getRouter())
router.use("/barren_planet", barrenPlanetEvent.getRouter())
router.use("/black_hole", blackHoleEvent.getRouter())
router.use("/blue_star", blueStarEvent.getRouter())
router.use("/crystal_asteroid", crystalAsteroidEvent.getRouter())
router.use("/futuristic_ship", futuristicShipEvent.getRouter())

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

    // Get the previous url
    let prevEvent = req.headers.referer || "/"

    // Get the string of the previous event
    if(prevEvent !== "/"){
      const prevURL = new URL(prevEvent)
      const pathParts = prevURL.pathname.split("/")
      prevEvent = pathParts[1]
    }

    if(prevEvent === "intro"){
      req.session.currentEvent = "asteroid"
      res.redirect("/asteroid")
    }else if(prevEvent === "asteroid"){
      req.session.currentEvent = "barren_planet"
      res.redirect("/barren_planet")
    }else if(prevEvent === "barren_planet"){
      req.session.currentEvent = "black_hole"
      res.redirect("/black_hole")
    }else if(prevEvent === "black_hole"){
      req.session.currentEvent = "blue_star"
      res.redirect("/blue_star")
    }else if(prevEvent === "blue_star"){
      req.session.currentEvent = "crystal_asteroid"
      res.redirect("/crystal_asteroid")
    }else if(prevEvent === "crystal_asteroid"){
      req.session.currentEvent = "futuristic_ship"
      res.redirect("/futuristic_ship")
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