var db = require("../models");

module.exports = function (app) {
  //Creating a new post
  app.post("/api/post", function (req, res) {
    db.Post.create(req.body).then(function (newPost) {
      res.json(newPost)
    })
  });

  //get all distinct moods
  app.get('/api/discover/moods', (req, res) => {
    db.Post.findAll({
      attributes: [
        db.sequelize.fn('DISTINCT', db.sequelize.col('category')),
        'category'
      ],
    }).then(moods => res.json(moods))
      .catch(err => res.json(err))
  });

  //get distinct moods where user participates
  app.get('/api/discover/moods/:id', (req, res) => {
    db.Post.findAll({
      order: ['id', 'DESC'],
      where: {UserId: req.params.id},
      attributes: [
        db.sequelize.fn('DISTINCT', db.sequelize.col('category')),
        'category'
      ],
    }).then(moods => res.json(moods))
      .catch(err => res.json(err))
  });

  //route for discover feed, returns a set of up to 12 posts fromt the given mood, offset by multiples of 12
  app.get("/api/discover/:mood/:offset", function (req, res) {
    db.Post.findAll({
      offset: parseInt(req.params.offset) * 12,
      where: {
        category: req.params.mood
      },
      limit: 12
    }).then(function (dbPost) {
      res.json(dbPost)
    })
  });

  //get a user personalized feed of posts, from the other users that they follow
  app.get("/api/feed/:id", function (req, res) {
    db.Relationship.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(async function (dbPost) {
      var postArr = [];

      let promiseArr = dbPost.map(({following_id}) =>
        db.Post.findAll({
          where: {
            UserId: following_id
          }
        })
      )

      let results = await Promise.all(promiseArr)

      results = results.reduce((acucmulator, value) => {
        acucmulator.push(...value)
        return acucmulator
      }, [])

      res.json(results)
    })
  })

  //get the posts information and comments associated with a specific post
  app.get("/api/post/full/:id", function (req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.Comment,
          include: [{
            model: db.User,
            attributed: ['user_name', 'UserId']
          }]
        },
        db.User
      ]
    }).then(function (dbPost) {
      res.json(dbPost)
    })
  });

  //update the like count of a specific post
  app.post("/api/post/like/:id/:val", function (req, res) {
    db.Post.update({
      likecount: likecount + req.params.val,
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost)
    })
  })

  //route to insert a new like to like table and update like count
  app.post("/api/post/like/:userid/:id/", function (req, res) {
    db.Post.update({
      likecount: likecount + req.params.val,
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      db.Like.create(req.body).then(function (dbLike) {
        res.json(dbLike)
      })
    })
  })

  app.get("/api/posts/authored/:id", function (req, res) {
    db.Post.findAndCountAll({
      where: {
        UserId: req.params.id
      }
    }).then(result => {
      res.json(result.count)
    })
  });

  //delete a post
  app.delete("/api/post/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.end()
    })
  })
}
