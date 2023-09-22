const User = require("./user")
const GameState = require("./game_state")

User.hasOne(GameState, {
  foreignKey: "user_id"
})
GameState.belongsTo(User, {
  foreignKey: "user_id"
})

module.exports = {User, GameState}