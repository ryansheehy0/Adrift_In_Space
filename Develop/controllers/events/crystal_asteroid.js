const Event = require("./event")

const args = {
  textEventTitle: "Crystal Asteroid",
  textEventParagraph: "A weird and interesting crystal asteroid approaches your location. You look closer at it and it almost seems artificially made. You loose your concentration looking at it and you have no time to move out of the way.",
  option1: "Try and harvest the crystals for fuel.",
  option2: "It's too risky. Shoot to destroy it out of your path.",
  handlebarsName: "crystal_asteroid",
  option1Function: function(req, locals){
    if(req.session.food > 0){
      locals.textEventParagraph = "You try and harvest the crystals, but they appear to be made from a material you have never seen before. You spend more time researching what this material is and spend an extra food. Even though it took a while it appears this crystal was artificially made by an intelligent alien race. This information may come in handy in the future."
      locals.food -= 1
      req.session.food -= 1
    }else{
      locals.textEventParagraph = "You try and harvest the crystals, but they appear to be made from a material you have never seen before. You spend more time researching what this material is. Since you don't have any food 1 crew member dies from starvation. Even though it took a while it appears this crystal was artificially made by an intelligent alien race. This information may come in handy in the future."
      locals.crew -= 1
      req.session.crew -=1
    }
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You destroy the asteroid, but some of the crystals come flying at your ship and strike one of your crew members killing them on the spot. Even though you lost one of your crew members at least you got out safely."
    locals.crew -= 1
    req.session.crew -= 1
  }
}

const event = new Event(args)

module.exports = event