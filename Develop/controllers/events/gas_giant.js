const Event = require("./event")

const args = {
  textEventTitle: "Gas Giant",
  textEventParagraph: "You see a giant gas planet. It's gravity is very strong. Stronger than your ship can handle in its current state.",
  option1: "Release some food to decrease your weight.",
  option2: "Increase power to the engines and use more fuel.",
  handlebarsName: "gas_giant",
  option1Function: function(req, locals){
    if(req.session.food >= 2){
      locals.textEventParagraph = "You released 2 food which just allows you to escape the gravity of the gas giant."
      locals.food -= 2
      req.session.food -= 2
    }else if(req.session.food = 1){
      locals.textEventParagraph = "You do not have enough food to throw aboard so you throw 1 of your crew members out and 1 of your food."
      locals.food -= 1
      req.session.food -= 1
      locals.crew -= 1
      req.session.crew -= 1
    }else{
      locals.textEventParagraph = "You do not have enough food to throw aboard so you throw 2 of your crew members out."
      locals.crew -= 2
      req.session.crew -= 2
    }
  },
  option2Function: function(req, locals){
    if(req.session.fuel >= 2){
      locals.textEventParagraph = "You increase power to the engines which lucky allows you to break free from the immense gravity, however at the cost of 2 extra fuel."
      locals.fuel -= 2
      req.session.fuel -= 2
    }else if(req.session.fuel = 1){
      locals.textEventParagraph = "You do not have enough fuel so you throw 1 of your crew members out and use 1 of fuel."
      locals.fuel -= 1
      req.session.fuel -= 1
      locals.crew -= 1
      req.session.crew -= 1
    }else{
      locals.textEventParagraph = "You do not have enough fuel so you throw 2 of your crew members out."
      locals.crew -= 2
      req.session.crew -= 2
    }
  }
}

const event = new Event(args)

module.exports = event