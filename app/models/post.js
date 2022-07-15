const Sequelize = require('sequelize');
const sequelize = require('../database');

class Post extends Sequelize.Model {};

Post.init({

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
  tableName: "post"
});


module.exports = Post;