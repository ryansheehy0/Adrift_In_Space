const Event = require("./event")

const args = {
  textEventTitle: "Blue Star",
  textEventParagraph: "You see a blue star. The flowing plasma looks alluring and dangerous. You want to get closer, but you know you will get burned.",
  option1: "Harvest fuel, but risk the chance to get burned.",
  option2: "Leave it alone and go past.",
  handlebarsName: "blue_star",
  option1Function: function(req, locals){
    locals.textEventParagraph = "You increase your ships thrusters and suck in some plasma. A sun flare is headed for your direction, but luckily it just misses you. You convert some of the plasma to fuel and gain 1 fuel."
    locals.fuel += 1
    req.session.fuel += 1
  },
  option2Function: function(req, locals){
    locals.textEventParagraph = "You fly past without experiencing any problems."
  }
}

const event = new Event(args)

module.exports = event