const { Figurine , User , Category , Picture } = require('../models')
module.exports = { 
    showAllFigurines: async (req,res) => {
        try{
            const figurines = await Figurine.findAll({
                include : ['user_figurines','figurine_category','figurine_pictures']
            });
            console.log(figurines);
            res.render('figurine' ,  {figurines});
        } catch (error) {
            console.error(error);
        }
        
    }
}