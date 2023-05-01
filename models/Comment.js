const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Comment extends Model {}


Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,     // Value will be current datetime
        },
        user_id: {
            type: DataTypes.INTEGER,         // Foreign key which references User.id
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {                       //Foreign key which references Blogpost.id
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;