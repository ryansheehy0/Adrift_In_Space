const Event = require("./event")

const args = {
  textEventTitle: "Imperium Scout",
  textEventParagraph: "On your travels you come across a ship. Your scanners show it has the word Imperium Scout on its side.",
  option1: "Engage your stealth cloaking.",
  option2: "Initiate evasive action and prepare for battle.",
  handlebarsName: "imperium_scout",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You engage your stealth cloaking and hope the Imperium Scout doesn't notice you. You fly by without incident."
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "The Imperium Scout sees you and starts to shoot on sight. Luckily you increase fuel to your engines enough to just move out of the way and fire your own missiles, hitting the scout ship destroying it. You loose 1 fuel, but at least you made it out alive."
    locals.fuel -= 1
    req.session.fuel -= 1
  }
}

const event = new Event(args)

module.exports = event