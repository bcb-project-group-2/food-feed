var db = require("../models");

module.exports = function(app){

	//route to get the number of people a user follows
	app.get("/api/following/:id", function (req,res){
	    db.Post.findAndCountAll({
	      where: {
	        UserId: req.params.id
	      }
	    }).then(result => {
	      res.json(result.count)
	    })
	});

	app.get("/api/followers/:id", function (req,res){
	    db.Post.findAndCountAll({
	      where: {
	        following_id: req.params.id
	      }
	    }).then(result => {
	      res.json(result.count)
	    })
	});

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