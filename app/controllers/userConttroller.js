const bcrypt = require('bcrypt');
const validator = require('email-validator');
const assert = require('assert');
const passwordValidator = require('password-validator');
const { user, User } = require("../models");


const schema = new passwordValidator();

schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


const userController = {
  
    signUpPage(req, res, next) {
        res.render('signup');
    },

    signUp : async (req, res, next) => {
        try{
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
                //assert permet de renvoyer une erreur si la condition verifié n'est pas bonne . 
            assert.ok(!Boolean(user), `L'utilisateur ${req.body.email} existe deja`);

            assert.ok(validator.validate(req.body.email), `${req.body.email} n'est pas un email valide`);

            assert.ok(req.body.password === require.body.passwordConfirm, `les mots de passe ne correspondent pas`)

            assert.ok(schema.validate(req.body.password), `le mot de passe doit contenir entre 8 et 100 caracteres, posseder au moins une majuscule, 2 numeros et pas d'espaces... bon courage `);

            const cryptedPassword = await bcrypt.hash(req.body.password,10);

            const newUser = await User.create({
                ...req.body,  //permets de recuperer toutes les valeurs de req.body
                password: cryptedPassword
            })

        }catch(err){
            console.error(err);
            res.redirect('/signup?error=true&errMsg=' + err.message);
        }




}};
module.exports = userController;