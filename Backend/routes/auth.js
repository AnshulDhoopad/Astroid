const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout, signup, signin, isSignedIn} = require('../controllers/auth')


router.post('/signup', [
    check("name").isLength({ min: 3 }).withMessage("Name should be atleast 3 character"),
    check("email").isEmail().withMessage("Enter a valid mail id"),
    check("password").isLength({ min:5}).withMessage("Password should be atleast 5 characters")
], signup);


router.post('/signin', [
    check("email").isEmail().withMessage("Enter a valid mail id"),
    check("password").isLength({ min:3}).withMessage("Correct Password is required")
], signin);


router.get('/signout', signout);

router.get('/test', isSignedIn, (req, res) => { 
    res.json(req.auth)
});

module.exports = router;



