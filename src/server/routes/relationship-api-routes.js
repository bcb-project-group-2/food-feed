var db = require("../models");

module.exports = function(app){
	app.post("/api/relationship", function(req, res){
		db.Relationship.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	app.delete("/api/relationship/:id", function(req, res){
		db.Relationship.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbRelationship){
			res.end()
		})
	})
}