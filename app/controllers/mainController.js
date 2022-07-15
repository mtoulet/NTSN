const {  Post } = require("../models");

const mainController = {
  homePage: async (req, res) => {
    const posts = await Post.findAll({
      include: ['auteur', 'comments']
    });
    res.render('home', {
      posts
    });
  }
}
module.exports = mainController;