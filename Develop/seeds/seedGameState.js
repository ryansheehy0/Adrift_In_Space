const GameState = require("../models/game_state")

function seedGameState(){
  GameState.bulkCreate([
    {
      light_years: "24",
      crew: "25",
      fuel: "24",
      food: "24",
      current_event: "barren_planet",
      user_id: 1
    }
  ])
}

module.exports = seedGameState