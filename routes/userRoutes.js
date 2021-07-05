const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// Signup, login, and logout
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

// Forgot and reset password
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword/:token', authController.resetPassword);

// Restricted to admins
router.route('/').get(userController.getAllUser);

module.exports = router;
