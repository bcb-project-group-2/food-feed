var db = require("../models");

module.exports = function(app){
	app.get("/api/users/:id", function(req,res){
		db.User.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbUser){
			res.json(dbUser)
		})
	})

	app.post("/api/users", function(req, res){
		db.User.create(req.body).then(function(dbUser){
			res.json(dbUser)
		});
	});

	app.delete("/api/users/:id", function(req, res){
		db.User.destroy({
			where: { 
				id: req.params.id
			}
		}).then(function(dbUser) {
			res.end()
		})
	})

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