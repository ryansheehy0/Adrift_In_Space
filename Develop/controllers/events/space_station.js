const Event = require("./event")

const args = {
  textEventTitle: "Space Station",
  textEventParagraph: "Your radar detects a space station. You will soon be in hailing distance.",
  option1: "Hail the space station.",
  option2: "Do not hail the space station.",
  handlebarsName: "space_station",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You hail the space station. It has been commandeered by pirates! They race to intercept you. You are boarded and lose 2 crew and 2 food."
    locals.crew -= 1
    req.session.crew -= 1
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You do not hail the space station and continue on your journey."
  }
}

const event = new Event(args)

module.exports = event