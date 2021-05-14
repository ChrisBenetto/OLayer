const { User } = require('../models');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

module.exports = {
    sendSignUp: async (req, res) => {
        const errors = [];
        try {
            const formData = req.body;
            console.log("Je recois ca ", formData)
            let verifyEmailInDatabase = true;
            if (!formData.name) {
                errors.push({
                    fielname: 'name',
                    message: 'Votre pseudo est obligatoire'
                })
            }
            if (!emailValidator.validate(formData.email)) {
                errors.push({
                    fieldname: 'email',
                    message: 'Cet email est invalide'
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
            formData.password = await bcrypt.hash(formData.password, 10);
            console.log(formData.password)
            const user = await User.create(formData);

            if (!user) {
                throw new Error(`User has been created, but no formData returned`);
            }
            return res.redirect('/login');
        } catch (error) {
            console.error(error);
        }

    },
    sendLogin: async (req, res) => {

        try {

            const formData = req.body;
            const errors = [];
            if (!emailValidator.validate(formData.email)) {
                errors.push({
                    fieldname: 'email',
                    message: 'Couple Email/Mot de passe incorrect'
                });
            }

            if (formData.password.length < 6) {
                errors.push({
                    fieldname: 'password',
                    message: 'Couple Email/Mot de passe incorrect'
                });
            }

            const user = await User.findOne({
                where: {
                    email: formData.email
                }
            });
            const isPasswordValid = await bcrypt.compare(formData.password, user.password);
            if (user && isPasswordValid) {
                req.session.user = user;
                delete req.session.user.dataValues.password;
                console.log(req.session);

                return res.redirect('/home');
            }
        } catch (error) {
            console.error(error);
            return res.status(500).render('login');
        }
    },
    logout: (req, res) => {
        delete req.session.user;
        res.redirect('/');
    },
    showProfil : (_,res) => {
        res.render('profil');
    }
}