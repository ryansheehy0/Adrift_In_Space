const Event = require("./event")

const args = {
  textEventTitle: "Barren Planet",
  textEventParagraph: "You encounter a barren planet. It looks like nothing is on it.",
  option1: "Scan and harvest resources.",
  option2: "Ignore and fly by.",
  handlebarsName: "barren_planet",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You scan the planet and find 2 Fuel, but it took longer then you expected and your crew eat one more food."
    locals.fuel += 2
    req.session.fuel += 2
    locals.food -= 1
    req.session.food -=1
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You pass on by the barren planet without incident."
  }
}

const event = new Event(args)

module.exports = event