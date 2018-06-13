var db = require("../models");

module.exports = function(app){
	app.get("/api/posts/:id", function(req, res){
		var query = {}
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


*/