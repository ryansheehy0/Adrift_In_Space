const Event = require("./event")

const args = {
  textEventTitle: "Thermal Planet",
  textEventParagraph: "As you travel to your destination you see a planet that looks like it is in thermal vision. Your scans show there is some sort of primitive life which changes color based on the temperature.",
  option1: "Send a team to land on the planet to search for more advanced life.",
  option2: "See if you can harvest the primitive life to convert it into fuel.",
  handlebarsName: "thermal_planet",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You find small intelligent humanoid creatures, but they appear to have primitive technology. Your team befriends one of them and teaches them your language. You gain 1 crew."
    locals.crew += 1
    req.session.crew += 1
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You gather a lot of this primitive life form, but it appear too complicated to turn into fuel due to its thermal characteristics. You continue on your journey with nothing to gain."
  }
}

const event = new Event(args)

module.exports = event