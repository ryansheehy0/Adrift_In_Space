const Event = require("./event")

const args = {
  textEventTitle: "Imperium Battlecruiser",
  textEventParagraph: `You see an Imperium Battlecruiser. The scout you just saw must have been scouting ahead for this ship. This ship has too powerful sensors for you to try and cloak from. You are receiving a message: "Surrender now to the Imperium. We are confiscating your ship and bringing you in for questioning."`,
  option1: "Flee.",
  option2: "Stand and fight.",
  handlebarsName: "imperium_battlecruiser",
  option1Function: function(req, locals){
    locals.textEventParagraph = "Recognizing the overwhelming firepower of the Imperium Battlecruiser you decide to run away. Luckily you are faster and quicker than the Battlecruiser, however you have to travel away from your home planet to do so. You add 1 lightyear to your journey."
    locals.lightYears += 2
    req.session.lightYears += 2
  },
  option2Function: function(req, locals){
    const startPar = "You decide to fight such a large battlecruiser. You put as much fuel as you can into your thrusters and as much energy as you can into your shields and weapons...  "
    if(req.session.crew >= 4 && req.session.fuel >= 6){
      locals.textEventParagraph = startPar + "You defeat the battlecruiser just barely, but suffer 2 casualties. You harvest the cruiser for any remaining resources. You find 4 food, but break even on your fuel."
      locals.food += 4
      req.session.food += 4
      locals.fuel += 1
      req.session.fuel += 1
    }else{
      locals.textEventParagraph = startPar + "You fight the battlecruiser with everything you got, but it isn't enough. All your crew ends up dying."
      locals.crew -= 4
      req.session.crew -= 4
    }
  }
}

const event = new Event(args)

module.exports = event