const { User , Category } = require('../models');
module.exports = {

    visitorPage : (_,res) => {
        res.render('index');
    },
    showSignUp : (_,res) => {
        res.render('signup');
    },
    showLoginPage: (_,res) => {
        res.render('login');
    },
    homePage :(_,res) => {
        res.render('home');
    },
    showUploadPage : async (_,res) => {
        try {
            const categories = await Category.findAll();
            console.log(categories)
            res.render('addFigurine' , {categories});
        } catch (error) {
            console.error(error)
        }
        
    }

};