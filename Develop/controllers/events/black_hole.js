const Event = require("./event")

const args = {
  textEventTitle: "Black Hole",
  textEventParagraph: "You encounter a large black hole.",
  option1: "See if you can go around.",
  option2: "No time. Straight ahead.",
  handlebarsName: "black_hole",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You go around the black hole, but due to the intense gravity you have to use 2 more fuel."
    locals.fuel -= 2
    req.session.fuel -= 2
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You go into the black hole and time travel into the future. You loose 3 crew members due to old age and show up 3 years in the future."
    locals.lightYears -= 3
    req.session.lightYears -= 3
    locals.crew -= 3
    req.session.crew -= 3
  }
}

const event = new Event(args)

module.exports = event