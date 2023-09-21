const router = require("express").Router()
const intro = require("./intro")
const asteroid = require("./asteroid")

router.use("/asteroid", asteroid)
router.use("/intro", intro)

router.get("/", (req, res) => {
  try{
    const prevPath = req.headers.referer || "/"

    if(prevPath.includes("intro")){
      res.redirect("/asteroid")
    }else if(prevPath.includes("asteroid")){
      res.redirect("/intro")
    }else{
      res.redirect("/intro")
    }

  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router