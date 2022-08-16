const { Model, DataTypes } = require('sequelize');
// Connect sequelize
const sequelize = require('../config/connection')

class Posts extends Model { }

// Model of the posts that are created on dashboard
Posts.init(
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "posts",
    }
);

// Export Posts model
module.exports = Posts;