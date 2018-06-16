var db = require("../models");

module.exports = function(app){
	//route to create a "follow" relationship with another user in the relationship table
	app.post("/api/relationship", function(req, res){
		db.Relationship.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	//route to "unfollow" another use, which destroys the entry on the relationship table
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