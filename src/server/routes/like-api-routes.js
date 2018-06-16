var db = require("../models");

module.exports = function(app){
	//return a count of the total amount of likes associated with a specific post
	app.get("/api/likes/:id", function(req, res){
		db.Like.findAndCountAll({
			where: {
				id: req.params.id
			}
		}).then(result => {
			res.json(result.count)
		})
	});

	//update the Like table with an additional like a specific post
	app.post("/api/likes/:id", function(req,res){
		db.Like.create(req.body).then(function(dbLike){
			res.json(dbLike)
		})
	})

	//remove the like entry from the table of a specific post
	app.delete("/api/likes/:id", function(req, res){
		db.Like.destroy({
			where: { 
				id: req.params.id
			}
		}).then({
			res.end()
		})
	})
}