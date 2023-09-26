const Event = require("./event")

const args = {
  textEventTitle: "Futuristic Ship",
  textEventParagraph: `You are receiving a message from the ship you see. "Greetings. This is Captain Aurora of the Celestial Space Ship. We come in peace and are in desperate need of food. We are willing to give you some crew or fuel. Sadly our scans show that you are the only ship close enough for us to trade with. If you refuse to trade we will open fire and take your resources." Your scans show they have advanced technology so you stand no hope of fighting.`,
  option1: "Trade food for crew.",
  option2: "Trade food for fuel.",
  handlebarsName: "futuristic_ship",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You give 2 food and get 2 crew."
    locals.food -= 2
    req.session.food -= 2
    locals.crew += 2
    req.session.crew += 2
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You give 2 food and get 2 fuel."
    locals.food -= 2
    req.session.food -= 2
    locals.fuel += 2
    req.session.fuel += 2
  }
}

const event = new Event(args)

module.exports = event