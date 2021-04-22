const { User } = require('../models');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

module.exports = {
    sendSignUp : async (req,res) => {
        const errors = [];
        try {
            const formData = req.body;
            let verifyEmailInDatabase = true;
            if(!formData.name){
                errors.push({
                    fielname:'name',
                    message:'Votre pseudo est obligatoire'
                })
            }
            if(!emailValidator.validate(formData.email)) {
                errors.push ({
                    fieldname:'email',
                    message:'Cet email est invalide'
                });
                verifyEmailInDatabase = false;
            }
            if (formData.password.length < 6) {
                errors.push({
                    fieldname: 'password',
                    message: `Le mot de passe doit contenir au moins 6 caractères.`
                });
            }

            if (formData.password !== formData.passwordConfirm) {
                errors.push({
                    fieldname: 'passwordConfirm',
                    message: `La confirmation du mot de passe est invalide`
                });
            }
            if (verifyEmailInDatabase) {
                // 1ère promesse
                const userFound = await User.findOne({
                    where: {
                        email: formData.email
                    }
                });

                if (userFound) {
                    errors.push({
                        fieldname: 'email',
                        message: `Cet email existe déjà.`
                    });
                }
            }

            if (errors.length) {
                return res.render('signup', { errors });
            }
        } catch (error) {
            console.error(error);
        }

    },
    sendLogin : (req,res) => {

    }
}