//require de tous les autres models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//TODO ajouter les liens entre chaques

User.hasMany(Comment,{
  foreignKey: 'comment_id',
  as:"comment"
});
Comment.belongsTo(User,{
  foreignKey: 'comment_id',
  as:"user"
})

User.hasMany(Post,{
  foreignKey: 'post_id',
  as: "post",
});
Post.belongsTo(User,{
  foreignKey: 'post_id',
  as: "user",
})

Post.hasMany(Comment,{
  foreignKey: 'comment_id',
  as  : "comment",
})
Comment.belongsTo(Post,{
  foreignKey: 'comment_id',
  as: "post"
})


module.exports = {
  User,
  Post,
  Comment,
}