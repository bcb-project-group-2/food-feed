var db = require("../models");

module.exports = function(app){
	//create an entry in the Relationship table to follow another user
	app.post("/api/relationship", function(req, res){
		db.Relationship.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	//remove an entry in the Relationship table to unfollow another user
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