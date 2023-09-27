const Event = require("./event")

const args = {
  textEventTitle: "White Galaxy",
  textEventParagraph: "A mysterious, ethereal flow emanates from a white galaxy, hinting at unknown wonders. You are drawn to the galaxy and seem to loose control of your actions.",
  option1: "Explore the white galaxy.",
  option2: "Explore the white galaxy.",
  handlebarsName: "white_galaxy",
  option1Function: function(req, locals){
    locals.textEventParagraph = `You explore the white galaxy and find a civilization emitting this white glow. They communicate with you telepathically which is shocking at first, but a calming emotion passes over you. They say "Hello. Welcome to our galaxy. I see you are in need of food and fuel. We would also like to give you one of our younger members to give them more experience. Our lifespans are very long and we want as much knowledge for our civilization as possible. When our member has learned all that he could he will be sent back to us. And as a parting gift know that everything is fair on a long enough timeline. So do good to get good." You receive 1 crew 2 fuel and 3 food.`
    locals.crew += 1
    req.session.crew += 1
    locals.fuel += 2
    req.session.fuel += 2
    locals.food += 3
    req.session.food += 3
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = `You explore the white galaxy and find a civilization emitting this white glow. They communicate with you telepathically which is shocking at first, but a calming emotion passes over you. They say "Hello. Welcome to our galaxy. I see you are in need of food and fuel. We would also like to give you one of our younger members to give them more experience. Our lifespans are very long and we want as much knowledge for our civilization as possible. When our member has learned all that he could he will be sent back to us. And as a parting gift know that everything is fair on a long enough timeline. So do good to get good." You receive 1 crew 2 fuel and 3 food.`
    locals.crew += 1
    req.session.crew += 1
    locals.fuel += 2
    req.session.fuel += 2
    locals.food += 3
    req.session.food += 3
  }
}

const event = new Event(args)

module.exports = event