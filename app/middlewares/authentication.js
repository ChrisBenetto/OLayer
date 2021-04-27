module.exports = {

    checkisMember: (request, response, next) => {

        // Première chose à faire, vérifier que l'utilisateur est bien connecté
        if (!request.session.user) {
            // Je le redirige vers la page de connexion
            return response.redirect('/');
        }
        next();
    },

    userToLocals: (request, response, next) => {

        if(request.session.user){
            response.locals.user = request.session.user;
        }
        next();
    }
}