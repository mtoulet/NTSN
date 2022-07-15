const Sequelize = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {};

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    unicode: true,
},
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    unicode: true,
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unicode: true,
    unique: true,
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
},
pseudo: {
  type: DataTypes.STRING,
  allowNull: false,
}

},
{
  sequelize,
  tableName: "user"
});


module.exports = User;