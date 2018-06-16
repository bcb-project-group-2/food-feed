var db = require("../models");

module.exports = function(app){
	app.get("/api/likes/:id", function(req, res){
		db.Like.findAndCountAll({
			where: {
				id: req.params.id
			}
		}).then(result => {
			res.json(result.count)
		})
	});

	app.post("/api/likes/:id", function(req,res){
		db.Like.create(req.body).then(function(dbLike){
			res.json(dbLike)
		})
	})

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