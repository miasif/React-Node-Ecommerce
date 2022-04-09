const express = require('express');
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
  isAuth,
  isAdmin,
} = require('./../controllers/authController');
const { userSignupValidator } = require('./../validator/index');
const { userById } = require('./../controllers/userController');
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
