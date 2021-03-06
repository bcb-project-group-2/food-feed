var express = require('express');
var passport = require('passport');
var mysql = require('mysql')
var Strategy = require('passport-facebook').Strategy;
const parser = require('body-parser');
const path = require('path');
var fs = require('fs')

var conn = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "foodFeedDB"
});
// var keys = require('dotenv').config()

var PORT = process.env.PORT || 8080;
//require our models for syncing
var db = require("./models");

// Configure the Facebook  & Google strategy for use by Passport.
// passport.use(new Strategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: 'http://localhost:3000/login/facebook/return'
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     return cb(null, profile);
//   }));

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//     function(accessToken, refreshToken, profile, cb) {
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return cb(err, user);
//        });
//   }
// ));


// // Configure Passport authenticated session persistence.
// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });


// Create a new Express application.
var app = express();

// Configure view engine to render EJS templates.
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// Use application-level middleware for common functionality
// app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());

// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// // Initialize Passport and restore authentication state\
// app.use(passport.initialize());
// app.use(passport.session());


// // Define routes.
// app.get('/',
//   function(req, res) {
//     res.render('home', { user: req.user });
//   });

// app.get('/login',
//   function(req, res){
//     res.render('login');
//   });

// app.get('/login/facebook',
//   passport.authenticate('facebook'));

// app.get('/login/facebook/return', 
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(parser.text());

app.use(express.static(path.join(__dirname, '../../dist')));

// require("./routes/post-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/comment-api-routes.js")(app);
require("./routes/relationship-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/like-api-routes.js")(app);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

	conn.connect(function(err) {
	  if (err) throw err;
	  console.log("connected as id " + conn.threadId);
	});

	var filename = __dirname + '/user.sql'
	seedSQLFiles(filename)
	filename = __dirname + '/posts.sql'
	seedSQLFiles(filename)

});

function seedSQLFiles(filename){
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) throw err;	
		data = data.replace(/\n/g, "");
		var arr = data.split("?")
		console.log(arr)
		arr.forEach(function(element){
			conn.query(element, function(err, results){
				// if(err) throw err
			})
		})		
	});
}