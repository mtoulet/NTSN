const express = require('express');
const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController')

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/signup', userController.signUpPage);

module.exports = router;