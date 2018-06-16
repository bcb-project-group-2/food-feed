var db = require("../models");

module.exports = function(app){
	//route to publish user comments to the Comment table 
	app.post("/api/comments", function(req, res){
		db.User.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	//route to delete associated comments from the logged in user
	app.delete("/api/comments/:id", function(req, res){
		db.User.destroy({
			where: { 
				id: req.params.id
			}
		}).then(function(dbComment){
			res.end()
		})
	})
}