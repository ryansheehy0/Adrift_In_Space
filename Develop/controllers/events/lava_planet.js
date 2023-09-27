const Event = require("./event")

const args = {
  textEventTitle: "Lava Planet",
  textEventParagraph: "Your sensors detect a nearby lava planet. Its fiery surface glows fiercely and it seems dangerous.",
  option1: "Send a team to gather food.",
  option2: "Bypass the planet and err on the side of caution.",
  handlebarsName: "lava_planet",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You send a team of your crew. They have discovered 2 food, but it was a rough journey to acquire it and 1 crew member died."
    locals.crew -= 1
    req.session.crew -= 1
    locals.food += 2
    req.session.food += 2
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You move bypass the planet and nothing of interest happens. At least you didn't risk the life of your crew."
  }
}

const event = new Event(args)

module.exports = event