const Event = require("./event")

const args = {
  textEventTitle: "Futuristic Ship",
  textEventParagraph: `You are receiving a message from the ship you see. "Greetings. This is Captain Aurora of the Celestial Space Ship. We come in peace and are in desperate need of food. We are willing to give you some crew or fuel. Sadly our scans show that you are the only ship close enough for us to trade with. If you refuse to trade we will open fire and take your resources." Your scans show they have advanced technology so you stand no hope of fighting.`,
  option1: "Trade food for crew.",
  option2: "Trade food for fuel.",
  handlebarsName: "futuristic_ship",
  option1Function: function(req, locals){
    if(req.session.food >= 2){
      locals.textEventParagraph = "You give 2 food and get 2 crew."
      locals.food -= 2
      req.session.food -= 2
      locals.crew += 2
      req.session.crew += 2
    }else if(req.session.food = 1){
      locals.textEventParagraph = "You give 1 food and get 1 crew."
      locals.food -= 1
      req.session.food -= 1
      locals.crew += 1
      req.session.crew += 1
    }else{
      locals.textEventParagraph = `You are receiving a message. "Our scans show you don't have any food. Therefore, will will take 1 of your crew members to eat them."`
      locals.crew -= 1
      req.session.crew -= 1
    }
  },
  option2Function: function(req, locals){
    if(req.session.food >=2 ){
      locals.textEventParagraph = "You give 2 food and get 2 fuel."
      locals.food -= 2
      req.session.food -= 2
      locals.fuel += 2
      req.session.fuel += 2
    }else if(req.session.food = 1){
      locals.textEventParagraph = "You give 1 food and get 1 fuel."
      locals.food -= 1
      req.session.food -= 1
      locals.fuel += 1
      req.session.fuel += 1
    }else{
      locals.textEventParagraph = `You are receiving a message. "Our scans show you don't have any food. Therefore, will will take 1 of your crew members to eat them and give you 1 fuel."`
      locals.crew -= 1
      req.session.crew -= 1
      locals.fuel += 1
      req.session.fuel += 1
    }
  }
}

const event = new Event(args)

module.exports = event