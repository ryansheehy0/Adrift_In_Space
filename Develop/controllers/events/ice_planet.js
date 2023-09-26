const Event = require("./event")

const args = {
  textEventTitle: "Ice Planet",
  textEventParagraph: `You see an ice planet and there appears to a small outpost. You receive an SOS message. "Day 1029 since we were abandoned by the Imperium. Our resources are gone and we are slowly dying out. Yesterday we had to eat Tolumus. He was the first of us to die and we waited as long as we could. What was weird is he didn't die from the cold, but what we think is some sort of disease only on this planet. Maybe that's why the Imperium abandoned us."`,
  option1: "Pickup the abandoned Imperium Crew and risk the disease coming aboard.",
  option2: "Leave them for the safety of your crew.",
  handlebarsName: "ice_planet",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You welcome on the abandoned Imperium crew. They are very happy that you saved them, but they are very weak. While eating one of them dies suddenly. The ship executes automatic quarantine. 3 more of the Imperium crew die while in quarantine. You run tests on the 2 remaining diseased crew and they seem to be immune and non contagious so you add them to your crew."
    locals.crew += 2
    req.session.crew += 2
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = `You hear another SOS message. "Day 1030 since we were abandoned by the Imperium. We ate Tolumus two days ago. Sadly our suspicions turned out correct. The disease that killed him now infected us. I don't think we have many more days left. We are desperately searching for a cure. Honlus said the scans found some sort of plant a couple days journey south which might cure our disease. I will be left here to keep the daily SOS message incase some ship comes by our location. Hopefully that planet cures us and I live long enough for them to come back." You go on your way leaving the abandoned crew to their fate. The abandoned crew being abandoned yet again.`
  }
}

const event = new Event(args)

module.exports = event