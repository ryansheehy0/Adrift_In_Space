const { Model, DataTypes } = require("sequelize")
const sequelize = require("../connection")

class GameState extends Model{}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    light_years: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    crew: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modal: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: `game_state`
  }
)

module.exports = GameState