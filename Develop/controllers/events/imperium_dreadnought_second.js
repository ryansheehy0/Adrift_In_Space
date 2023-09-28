const Event = require("./event")

const args = {
  textEventTitle: "Imperium Dreadnought",
  textEventParagraph: `You receive a transmission from your crew inside the Dreadnought: "We have shut down the Dreadnought's shields. We have also discovered plans to invade your home planet. If we don't destroy this thing we will have no place to go home."`,
  option1: "It's too risky to take any chances. Destroy the Dreadnought with your crew still in it.",
  option2: "Shoot to disable the engines of the Dreadnought. And give time for your crew to escape.",
  handlebarsName: "imperium_dreadnought_second",
  option1Function: function(req, locals){
    locals.textEventParagraph = "The Dreadnought exploded with your crew still inside and they all die."
    locals.crew = 0
    req.session.crew = 0
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = `Your crew make it out alive on an escape pod, but the weapons on the Dreadnought fire and kill the crew member who was from the White Galaxy. Right before he died he sent this transmission: "I was sent to be with you to gain as much knowledge as I could and I have fulfilled my mission. My body might die, but my soul will make it back to the White Galaxy carrying the knowledge of our journey together. Farewell my friend."`
    locals.crew -= 1
    req.session.crew -= 1
  }
}

const event = new Event(args)

module.exports = event