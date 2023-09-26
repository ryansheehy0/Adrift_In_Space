const Event = require("./event")

const args = {
  textEventTitle: "Gas Giant",
  textEventParagraph: "You see a giant gas planet. It's gravity is very strong. Stronger than your ship can handle in its current state.",
  option1: "Release some food to decrease your weight.",
  option2: "Increase power to the engines and use more fuel.",
  handlebarsName: "gas_giant",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You released 2 food which just allows you to escape the gravity of the gas giant."
    locals.food -= 2
    req.session.food -= 2
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You increase power to the engines which lucky allows you to break free from the immense gravity, however at the cost of 2 extra fuel."
    locals.fuel -= 2
    req.session.fuel -= 2
  }
}

const event = new Event(args)

module.exports = event