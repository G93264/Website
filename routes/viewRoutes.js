const express = require('express');
const viewsController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();


// here first
router.use(authController.isLoggedIn);

router.get('/', viewsController.getOverview);
router.get('/shop', viewsController.getShop);
// then here
router.get('/login', viewsController.getLogin);

module.exports = router;
