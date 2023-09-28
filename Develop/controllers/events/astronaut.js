const Event = require("./event")

const args = {
  textEventTitle: "Astronaut",
  textEventParagraph: "Your crew spots an astronaut adrift in space. Federation rules require you to check for signs of life.",
  option1: "Investigate the situation.",
  option2: "Risk a citation in the future, you have to get home.",
  handlebarsName: "astronaut",
  option1Function: function(req, locals){
    locals.textEventParagraph = "It seems like the astronaut is friendly. You gain 1 crew member."
    locals.crew += 1
    req.session.crew += 1
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You move right of the astronaut and pass by without any problems."
  }
}

const event = new Event(args)

module.exports = event