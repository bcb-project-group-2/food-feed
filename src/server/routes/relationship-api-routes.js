var db = require("../models");

module.exports = function(app){
	app.post("/api/comments", function(req, res){
		db.Relationship.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	app.delete("/api/comments/:id", function(req, res){
		db.Relationship.destroy({
			where: {
				id: req.params.id
			}
		}).then({
			res.end()
		})
	})
}