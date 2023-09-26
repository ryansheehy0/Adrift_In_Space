const Event = require("./event")

const args = {
  textEventTitle: "Astronaut",
  textEventParagraph: "Your crew spots an astronaut adrift in space. Federation rules require you to check for signs of life.",
  option1: "Investigate the situation.",
  option2: "Risk the citation, you hav to get home.",
  handlebarsName: "astronaut",
  option1Function: function(req, locals){
    locals.textEventParagraph = " It was a trap, the astronaut comes aboard and tries to take over the ship." 
    req.session.crew -= 2
    locals.food -= 2
    req.session.food -= 2
    locals.food -= 2
    req.session.fuel -= 2
    locals.fuel -= 2
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You move right of the astronaut and pass by without any problems."
  }
}

const event = new Event(args)

module.exports = event