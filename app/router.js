const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController')
const figurineController = require('./controllers/figurineController')
const userController = require('./controllers/userController')

/*Page Accueil pour visiteur */

router.get('/', mainController.visitorPage)

router.route('/signup')
    .get(mainController.showSignUp)
    .post(userController.sendSignUp);

router.route('/login')
    .get(mainController.showLoginPage)
    .post(userController.sendLogin);
/*
router.get('/home' , mainController.homePage);
router.get('/figurines' , figurineController.showAllFigurines);
router.get('/figurine/:id' , figurineController.showOneFigurine);
router.post('/figurine/:id/addComment' , figurineController.addCommentToFigurine);

router.router('/addFigurine')
    .get(figurineController.showUploadPage)
    .post(figurineController.sendFigurine);

router.get('/profil', userController.showProfil);
router.get('/profil/:id' , userController.showAnotherProfil);

*/
module.exports = router;