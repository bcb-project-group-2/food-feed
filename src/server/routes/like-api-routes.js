var db = require("../models");

module.exports = function(app){
	//route to create a tally of all likes based on the id of the post
	app.get("/api/likes/:id", function(req, res){
		db.Like.findAndCountAll({
			where: {
				id: req.params.id
			}
		}).then(result => {
			res.json(result.count)
		})
	});

	//route to create a like relationship by user on the Like table
	app.post("/api/likes/:id", function(req,res){
		db.Like.create(req.body).then(function(dbLike){
			res.json(dbLike)
		})
	})

	//route to remove like from table
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