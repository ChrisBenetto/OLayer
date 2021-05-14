module.exports = {

    checkisMember: (req, res, next) => {
        if (!req.session.user) {
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