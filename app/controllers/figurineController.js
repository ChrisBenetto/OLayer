const { Figurine , User , Category , Picture } = require('../models')
module.exports = { 
    showAllFigurines: async (_,res) => {
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
    },
    sendFigurine : async (req,res)=> {
            const errors = [];
            try {
                const formData = req.body;
                console.log(formData);
                if (!formData.name) {
                    errors.push({
                        fielname: 'name',
                        message: 'Le nom de figurine est obligatoire'
                    })
                }
                if (!formData.category) {
                    errors.push({
                        fieldname: 'category',
                        message: 'Une categorie est obligatoire'
                    });
                }
                if (!formData.description) {
                    errors.push({
                        fieldname: 'description',
                        message: `Une description est obligatoire`
                    });
                }
                if(!formData.picture_url) {
                    errors.push({
                        fieldname: 'picture_url',
                        message: `Une image est obligatoire`
                    });
                }
                if (errors.length) {
                    return res.render('addFigurine', { errors });
                }
                return res.render('addFigurine');
        } catch (error) {
            console.error(error);
        }
    }
}