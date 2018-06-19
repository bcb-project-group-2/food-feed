var db = require("../models");

module.exports = function(app){
	//create new post entry to the Comment table
	app.post("/api/comments/new", function(req, res){
		db.Comment.create(req.body).then(function(dbComment){
			res.json(dbComment)
		});
	});

	//delete entry from Comment table based on specific id
	app.delete("/api/comments/del/:id", function(req, res){
		db.Comment.destroy({
			where: { 
				id: req.params.id
			}
		}).then(function(dbComment){
			res.end()
		})
	})
}