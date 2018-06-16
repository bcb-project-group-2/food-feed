var db = require("../models");

module.exports = function(app){
	app.post("/api/post", function(req, res){
		db.Post.create(req.body).then(function(newPost){
			res.json(newPost)
		})
	})

	app.get("/api/discover/:mood/:offset", function(req,res){
		db.Post.findAll({
			offset: parseInt(req.params.offset) * 12;
			where: {
				category: req.params.mood
			}
		}).then(function(dbPost){
			res.json(dbPost)
		})
	})

	app.get("/api/feed/:id", function(req,res){
		db.Relationship.findAll({
			where: {
				UserId: req.params.id
			}
		}).then(async function(dbPost){
			var postArr = []

			let promiseArr = dbPost.map(({ following_id }) => 
				db.Post.findAll({ 
					where: { 
					UserId:  following_id 
					}
				})
			)
			
			let results = await Promise.all( promiseArr )
			
			results = results.reduce((acucmulator, value) =>{
				acucmulator.push(...value)
				return acucmulator
			},[])

			res.json(results)
		})
	})

	app.get("/api/post/:id", function(req, res){
		db.Post.findOne({
			where: { 
				id: req.params.id
			},
			include: [db.Comment]
		}).then(function(dbPost){
			res.json(dbPost)
		})
	})

	app.delete("/api/post/:id", function(req, res){
		db.Post.destroy({
			where: {
				id: req.params.id
			}
		}).then({
			res.end()
		})
	})
}

/*
/api/posts
	- return all the posts to a variable
		- query to relationship table to get all the followers
		- query to post table for all posts associated with those followers

/api/posts/:id
	- return all the data associated with a specific post
		- post
			- comments
				- created at
				- user information
			- emoji info

post /api/users/new
post /api/users/auth
*/

/*
post route
	- push to the posts table
	- take the route to the image
	- the user ID of the person submitting
	- take a category
*/