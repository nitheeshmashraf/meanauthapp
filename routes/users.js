const express = require('express');
const router = express.Router();

// routers
router.get('/register',(req,res,next)=>{
	res.send("register");
});

// auth
router.get('/authenticate',(req,res,next)=>{
	res.send("authenticate");
});


module.exports = router;
