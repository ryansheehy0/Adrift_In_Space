const Event = require("./event")

const args = {
  textEventTitle: "Futuristic Ship",
  textEventParagraph: ".",
  option1: "Go to the left of the asteroid.",
  option2: "Go to the right of the asteroid.",
  handlebarsName: "asteroid",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You move left of the asteroid and get hit losing 1 crew member."
    locals.crew -= 1
    req.session.crew -= 1
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You move right of the asteroid and pass by without any problems."
  }
}

const event = new Event(args)

module.exports = event