const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const user = require('../models/user');

// routers
router.post('/register',(req,res,next)=>{
	Let newUser = new User({
		name: req.body.Username,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, (err, user)=>{
		if(err){
			res.json({success:false, msg:'Failed to register user'+newUser.name});
		}
	})


	res.send("register");
});

// auth
router.post('/authenticate',(req,res,next)=>{
	res.send("authenticate");
});


// profile
router.get('/profile',(req,res,next)=>{
	res.send("profile");
});


module.exports = router;
