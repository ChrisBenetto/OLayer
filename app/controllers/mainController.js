const { User } = require('../models');
module.exports = {

    visitorPage : (req,res) => {
        res.render('index');
    },
    showSignUp : (req,res) => {
        res.render('signup');
    },
    showLoginPage: (req,res) => {
        res.render('login');
    },
    showhomePage :(req,res) => {
        
    }

};