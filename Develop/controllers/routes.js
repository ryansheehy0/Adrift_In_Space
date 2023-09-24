const router = require("express").Router()
const saveSession = require("../utils/saveSession")
const intro = require("./intro")
const asteroidEvent = require("./events/asteroid")
const barrenPlanetEvent = require("./events/barren_planet")

// Account path imports
const login = require("./login")
const signup = require("./signup")
const logout = require("./logout")

router.use("/asteroid", asteroidEvent.getRouter())
router.use("/barren_planet", barrenPlanetEvent.getRouter())
router.use("/intro", intro)

// Account paths
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