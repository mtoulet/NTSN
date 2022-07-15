const Sequelize = require('sequelize');
const sequelize = require('../database');

class Comment extends Sequelize.Model {};

Comment.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "Comment"
});


module.exports = Comment;