//require de tous les autres models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//TODO ajouter les liens entre chaques

module.exports = {
  User,
  Post,
  Comment,
}