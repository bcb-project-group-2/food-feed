var db = require("../models");

module.exports = function(app){
	//route to find respond with a specific user ID from the database
	app.get("/api/users/:id", function(req,res){
		db.User.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbUser){
			res.json(dbUser)
		})
	})

	//route to create a user in the database
	app.post("/api/users", function(req, res){
		db.User.create(req.body).then(function(dbUser){
			res.json(dbUser)
		});
	});

	//route to allow for deletion of user from database
	app.delete("/api/users/:id", function(req, res){
		db.User.destroy({
			where: { 
				id: req.params.id
			}
		}).then(function(dbUser) {
			res.end()
		})
	})

	//route to validate user email, will return a null value if the email was not found in database, returns true if email already exists
	app.get("/api/users/check/:email", function(req, res){
		db.User.findOne({
			where: {
				user_email: req.params.email
			}
		}).then(function(dbUser){
			if(dbUser === null){
				res.json(false)
			}else{
				res.json(true)
			}
		})
	})

	//route to validate user supplied credentials in teh database for logging in
	app.get("/api/users/login/:email/:password", function(req, res){
		db.User.findOne({
			where: {
				user_email: req.params.email
			}
		}).then(function(dbUser){
			if(dbUser.password === req.params.password){
				res.json(true)
			}else{
				res.json(false)
			}
		})
	})
}