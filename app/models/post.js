const Sequelize = require('sequelize');
const sequelize = require('../database');

class Comment extends Sequelize.Model {};

Comment.init({

  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "comment"
});


module.exports = Comment;