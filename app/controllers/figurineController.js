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
        
    },
    showOneFigurine : async (req,res) => {
        try {
            const figurineId = parseInt(req.params.id , 10 );
            console.log("FIGURINE ID : " , figurineId);
            if(!figurineId) {
                res.render('error404');
            }
            const figurine = await Figurine.findByPk(figurineId , ({
                include : ['user_figurines','figurine_category','figurine_pictures']
            }));
            res.render('detail' , {figurine});

        } catch (error) {
            console.error(error)
        }
    }
}