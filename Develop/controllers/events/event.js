function Event({textEventTitle, textEventParagraph, option1, option2, handlebarsName, option1Function, option2Function}){
  const router = require("express").Router()
  this.getRouter = function(){return router}

  let locals

  router.get("/", (req, res) => {
    if(req.session.crew <= 0){
      res.redirect("/gameover")
      return
    }

    if(req.session.lightYears <= 0){
      res.redirect("/youwin")
      return
    }

    locals = {
      isLoggedIn: Boolean(req.session.loggedInUser),
      lightYears: req.session.lightYears,
      textEventTitle,
      textEventParagraph,
      option1,
      option2,
      crew: req.session.crew,
      fuel: req.session.fuel,
      food: req.session.food
    }
    res.render(handlebarsName, locals)
  })

  function options(req){
    if(req.session.fuel > 0){
      req.session.lightYears -= 1
      locals.lightYears -= 1
      req.session.fuel -= 1
      locals.fuel -= 1
    }
    if(req.session.food > 0){
      req.session.food -= 1
      locals.food -= 1
    }else{
      req.session.crew -= 1
      locals.crew -= 1
    }

    locals.option1 = "Continue"
    locals.option2 = "Continue"
  }

  function nonNegative(req){
    if(req.session.lightYears < 0){
      req.session.lightYears = 0
      locals.lightYears = 0
    }
    if(req.session.crew < 0){
      req.session.crew = 0
      locals.crew = 0
    }
    if(req.session.fuel < 0){
      req.session.fuel = 0
      locals.fuel = 0
    }
    if(req.session.food < 0){
      req.session.food = 0
      locals.food = 0
    }
  }

  router.get("/1", (req, res) => {
    options(req, res)
    option1Function(req, locals)
    nonNegative(req)

    res.render(handlebarsName, locals)
  })

  router.get("/2", (req, res) => {
    options(req, res)
    option2Function(req, locals)
    nonNegative(req)

    res.render(handlebarsName, locals)
  })

}

module.exports = Event