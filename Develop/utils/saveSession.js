const { where } = require("sequelize")
const {User, GameState} = require("../models/index")

async function saveSession(session, userId){
  // Check if the user has a gameState saved
  const hasGameState = await GameState.findOne({
    include: [
      {
        model: User,
        where: {
          id: userId
        }
      }
    ]
  })

  if(!hasGameState){
    // If no gameState saved create one
    await GameState.create({
      light_years: session.lightYears,
      crew: session.crew,
      fuel: session.fuel,
      food: session.food,
      current_event: session.currentEvent,
      user_id: userId
    })
  }else{
    // If gameState saved then update
    await GameState.update({
      light_years: session.lightYears,
      crew: session.crew,
      fuel: session.fuel,
      food: session.food,
      current_event: session.currentEvent,
      user_id: userId
    },
      {
        where: {id: userId}
      }
    )
  }
}

module.exports = saveSession