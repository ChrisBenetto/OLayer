const express = require('express');

const mainController = require('./controllers/mainController')
const figurineController = require('./controllers/figurineController')
const userController = require('./controllers/userController')
const authMiddleware = require('./middlewares/authentication');
const router = express.Router();

router.get('/', mainController.visitorPage)

router.route('/signup')
    .get(mainController.showSignUp)
    .post(userController.sendSignUp);

router.route('/login')
    .get(mainController.showLoginPage)
    .post(userController.sendLogin);
router.get('/logout', userController.logout)
router.use(authMiddleware.checkisMember);
router.get('/home',authMiddleware.userToLocals, mainController.homePage);
/*router.get('/figurines' , authMiddleware.checkisMember , figurineController.showAllFigurines);
router.get('/figurine/:id' , authMiddleware.checkisMember , figurineController.showOneFigurine);
router.post('/figurine/:id/addComment' , authMiddleware.checkisMember , figurineController.addCommentToFigurine);

router.router('/addFigurine')
    .get(authMiddleware.checkisMember , figurineController.showUploadPage)
    .post(authMiddleware.checkisMember , figurineController.sendFigurine);

router.get('/profil', userController.showProfil);
router.get('/profil/:id' , userController.showAnotherProfil);

*/
module.exports = router;