const { Model, DataTypes } = require('sequelize');
// Connect sequelize
const sequelize = require('../config/connection')

class Comments extends Model { }

// Model of the Comments that are created on dashboard
Comments.init(
    // Include title & content
    {
        
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // reference user_id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
        // reference post_id
        post_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'posts',
              key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Comments",
    }
);

// Export Comments model
module.exports = Comments;