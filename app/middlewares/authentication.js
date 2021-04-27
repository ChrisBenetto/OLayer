module.exports = {

    checkisMember: (req, res, next) => {

        // Première chose à faire, vérifier que l'utilisateur est bien connecté
        if (!req.session.user) {
            // Je le redirige vers la page de connexion
            return res.redirect('/');
        }
        next();
    },

    userToLocals: (req, res, next) => {

        if(req.session.user){
            res.locals.user = req.session.user;
        }
        next();
    }
}