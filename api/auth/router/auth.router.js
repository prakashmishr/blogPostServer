const express = require('express');
const router = express.Router();

const authController = require('../controller/auth.controller');
const authValidator = require('../validations/auth.validator');


router.post('/login', authValidator.login,authController.login);
router.post('/signup', authValidator.signup , authController.signup); 


module.exports = router;






