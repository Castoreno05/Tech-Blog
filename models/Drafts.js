const { Model, DataTypes } = require("sequelize");
// Connect sequelize
const sequelize = require("../config/connection");

class Drafts extends Model {}

// Model of the drafts that are created on dashboard
Drafts.init(
  // Include title & content
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // reference user_id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "drafts",
  }
);

// Export Drafts model
module.exports = Drafts;

// Create draft model. Use drafts as an example
// export draft model
// Create routes to the server
// Create a post request to database
// Establish user input by creating succsessful post request
