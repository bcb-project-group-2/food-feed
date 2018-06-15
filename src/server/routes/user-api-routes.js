var db = require("../models");

module.exports = function(app){
	app.post("/api/users", function(req, res){
		db.User.create(req.body).then(function(dbUser){
			res.json(dbUser)
		});
	});

	app.delete("/api/authors/:id", function(req, res){
		db.User.destroy({
			where: { 
				if: req.params.id
			}
		}).then(function(dbUser){
			res.json(dbUser)
		})
	})
}