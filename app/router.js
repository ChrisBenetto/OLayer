const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController')
const figurineController = require('./controllers/figurineController')
const userController = require('./controllers/userController')

/*Page Accueil pour visiteur */

router.get('/', mainController.visitorPage)
/* Routes Inscription */
router.route('/signup')
    .get(mainController.showSignUp)
    .post(mainController.sendSignUp);
/* Routes Connexion */
router.route('/login')
    .get(mainController.showLoginPage)
    .post(mainController.sendLogin);
/* Partie Membres */
router.get('/home' , mainController.homePage);
router.get('/figurines' , figurineController.showAllFigurines);
router.get('/figurine/:id' , figurineController.showOneFigurine);
router.post('/figurine/:id/addComment' , figurineController.addCommentToFigurine);
/*Ajout de figurines */
router.router('/addFigurine')
    .get(figurineController.showUploadPage)
    .post(figurineController.sendFigurine);

router.get('/profil', userController.showProfil);
router.get('/profil/:id' , userController.showAnotherProfil);


module.exports = router;