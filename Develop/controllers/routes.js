// Other imports
const router = require("express").Router()
const saveSession = require("../utils/saveSession")

// Unique Events
const intro = require("./unique_events/intro")
const gameOver = require("./unique_events/gameover")
const youWin = require("./unique_events/youwin")

router.use("/intro", intro)
router.use("/gameover", gameOver)
router.use("/youwin", youWin)

// Events
const asteroidEvent = require("./events/asteroid")
const barrenPlanetEvent = require("./events/barren_planet")
const blackHoleEvent = require("./events/black_hole")
const blueStarEvent = require("./events/blue_star")
const crystalAsteroidEvent = require("./events/crystal_asteroid")
const futuristicShipEvent = require("./events/futuristic_ship")
const gasGiantEvent = require("./events/gas_giant")
const icePlanetEvent = require("./events/ice_planet")
const lavaPlanetEvent = require("./events/lava_planet")
const thermalPlanetEvent = require("./events/thermal_planet")
const whiteGalaxyEvent = require("./events/white_galaxy")
const imperiumScoutEvent = require("./events/imperium_scout")
const imperiumBattlecruiserEvent = require("./events/imperium_battlecruiser")
const spaceStationEvent = require("./events/space_station")
const astronautEvent = require("./events/astronaut")
const imperiumDreadnoughtEvent = require("./events/imperium_dreadnought")
const imperiumDreadnoughtSecondEvent = require("./events/imperium_dreadnought_second")

router.use("/asteroid", asteroidEvent.getRouter())
router.use("/barren_planet", barrenPlanetEvent.getRouter())
router.use("/black_hole", blackHoleEvent.getRouter())
router.use("/blue_star", blueStarEvent.getRouter())
router.use("/crystal_asteroid", crystalAsteroidEvent.getRouter())
router.use("/futuristic_ship", futuristicShipEvent.getRouter())
router.use("/gas_giant", gasGiantEvent.getRouter())
router.use("/ice_planet", icePlanetEvent.getRouter())
router.use("/lava_planet", lavaPlanetEvent.getRouter())
router.use("/thermal_planet", thermalPlanetEvent.getRouter())
router.use("/white_galaxy", whiteGalaxyEvent.getRouter())
router.use("/imperium_scout", imperiumScoutEvent.getRouter())
router.use("/imperium_battlecruiser", imperiumBattlecruiserEvent.getRouter())
router.use("/space_station", spaceStationEvent.getRouter())
router.use("/astronaut", astronautEvent.getRouter())
router.use("/imperium_dreadnought", imperiumDreadnoughtEvent.getRouter())
router.use("/imperium_dreadnought_second", imperiumDreadnoughtSecondEvent.getRouter())

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
    }else if(prevEvent === "futuristic_ship"){
      req.session.currentEvent = "gas_giant"
      res.redirect("/gas_giant")
    }else if(prevEvent === "gas_giant"){
      req.session.currentEvent = "ice_planet"
      res.redirect("/ice_planet")
    }else if(prevEvent === "ice_planet"){
      req.session.currentEvent = "lava_planet"
      res.redirect("/lava_planet")
    }else if(prevEvent === "lava_planet"){
      req.session.currentEvent = "thermal_planet"
      res.redirect("/thermal_planet")
    }else if(prevEvent === "thermal_planet"){
      req.session.currentEvent = "white_galaxy"
      res.redirect("/white_galaxy")
    }else if(prevEvent === "white_galaxy"){
      req.session.currentEvent = "imperium_scout"
      res.redirect("/imperium_scout")
    }else if(prevEvent === "imperium_scout"){
      req.session.currentEvent = "imperium_battlecruiser"
      res.redirect("/imperium_battlecruiser")
    }else if(prevEvent === "imperium_battlecruiser"){
      req.session.currentEvent = "space_station"
      res.redirect("/space_station")
    }else if(prevEvent === "space_station"){
      req.session.currentEvent = "astronaut"
      res.redirect("/astronaut")
    }else if(prevEvent === "astronaut"){
      req.session.currentEvent = "imperium_dreadnought"
      res.redirect("/imperium_dreadnought")
    }else if(prevEvent === "imperium_dreadnought"){
      req.session.currentEvent = "imperium_dreadnought_second"
      res.redirect("/imperium_dreadnought_second")
    }else if(prevEvent === "imperium_dreadnought_second"){
      if(req.session.crew === 0){
        req.session.currentEvent = "gameover"
        res.redirect("/gameover")
      }else if(req.session.lightYears <= 0){
        req.session.currentEvent = "youwin"
        res.redirect("/youwin")
      }
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