const express	=	require('express');
const path	=	require('path');
const bodyParser	=	require('body-parser');
const cors	=	require('cors');
const passport	=	require('passport');
const mongoose	=	require('mongoose');

const app = express();

const users = require('./routes/users');

// port
const port = 3000;

// cors middleware
app.use(cors());

// body paser middleware
app.use(bodyParser.json());

// user middleware
app.use('/users', users );

// http method
app.get('/',(req,res)=>{
	res.send("Invalid END point");
});

// listening to server
app.listen(port,()=>{
	console.log("Server started on port:"+port);
})