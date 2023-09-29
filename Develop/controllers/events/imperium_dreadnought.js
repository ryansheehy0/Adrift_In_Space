const Event = require("./event")

const args = {
  textEventTitle: "Imperium Dreadnought",
  textEventParagraph: `As you chart your course through the cosmos, a colossal vessel appears on the scanners. An Imperial Dreadnought. This behemoth of a ship is a symbol of the Imperium's overwhelming might, armed with formidable weaponry and formidable defenses. The crew member that was sent with you from the White Galaxy says to you "Captain, this is a formidable adversary. Engaging them directly could be disastrous. I have information on a hidden route that may allow you to bypass their surveillance. It's risky, but it might be our best chance for survival."`,
  option1: "Follow the hidden route.",
  option2: "Engage in battle.",
  handlebarsName: "imperium_dreadnought",
  option1Function: function(req, locals){
    locals.textEventParagraph = "Trusting the advice of your crew member, you send the rest of your crew into the Dreadnought. Hopefully they will find a way to brow up the Dreadnought or shut it down from the inside."
    if(req.session.fuel > 0){
      locals.fuel += 1
      req.session.fuel += 1
      locals.lightYears += 1
      req.session.lightYears += 1
    }
    if(req.session.food === 0){
      locals.crew += 1
      req.session.crew += 1
    }
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You decide to prepare for a direct confrontation with the Imperium Dreadnought, but it is too powerful and blows you up killing you and your crew."
    locals.crew = 0
    req.session.crew = 0
  }
}

const event = new Event(args)

module.exports = event