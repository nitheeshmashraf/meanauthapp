const express	=	require('express');
const path	=	require('path');
const bodyParser	=	require('body-parser');
const cors	=	require('cors');
const passport	=	require('passport');
const mongoose	=	require('mongoose');
const config	=	require('./config/database');

// connect to database
mongoose.connect(config.database);
var promise = mongoose.createConnection(config.database, {
  useMongoClient: true,
  /* other options */
});

promise.then(function(db) {
   // Use `db`, for instance `db.model()`
   console.log('connected to database '+ config.database);
});

// On connection success
// mongoose.connection.on('connected', ()=>{
	// console.log('connected to database '+ config.database);
// })

// On connection error
mongoose.connection.on('error', (err)=>{
	console.log('Database connection error: '+ err);
})

const app = express();

const users = require('./routes/users');

// port
const port = 3000;

// cors middleware
app.use(cors());

// set static folder file
app.use(express.static(path.join(__dirname,'public')))

// body paser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

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