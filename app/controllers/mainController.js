const { User } = require('../models');
module.exports = {
    visitorPage : async (req,res) => {
        try {
            const categories = await User.findAll();
            console.log(categories); 
            res.render('index' , { categories });
        } catch (error) {
            console.error(error);
        }
        
    }
};