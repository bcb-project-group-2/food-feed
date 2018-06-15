var db = require("../models");

module.exports = function(app){
	app.post("/api/comments", function(req, res){
		db.User.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	app.delete("/api/comments/:id", function(req, res){
		db.User.destroy({
			where: { 
				if: req.params.id
			}
		}).then(function(dbComment){
			res.json(dbComment)
		})
	})
}