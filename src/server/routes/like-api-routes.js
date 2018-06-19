var db = require("../models");

module.exports = function (app) {
  //return a count of the total amount of likes associated with a specific post
  // app.get("/api/likes/:id", function (req, res) {
  //   db.Like.findAndCountAll({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(result => {
  //     res.json(result.count)
  //   })
  // });

  //get user liked items
  app.get('/api/likes/user/:id', (req, res) => {
    db.Like.findAll({
      where: {UserId: req.params.id},
      attributes: ['PostId'],
    }).then(likes => {
      res.json(likes.map(like => like.PostId))
    })
      .catch(e => res.end())
  });

//update the Like table with an additional like a specific post
  app.post("/api/likes/add", function (req, res) {
    db.Like.create(req.body).then(function (dbLike) {
      res.json(dbLike)
    })
      .catch(e => res.end())
  });

//remove the like entry from the table of a specific post
  app.delete("/api/likes/del/:uid/:pid", function (req, res) {
    db.Like.destroy({
      where: {
        UserId: req.params.uid,
        PostId: req.params.pid
      }
    }).then(() => {
      res.end()
    })
      .catch(e => res.end())
  });

  //get total likes by post
  app.get('/api/likes/posts', (req, res) => {
    db.Like.findAll({
        attributes: ['PostId']
      }
    ).then(likes => {
      let likeCount = {};
      likes.forEach(like => {
          if (!Object.keys(likeCount).includes(like.PostId)) {
            likeCount[like.PostId] = 0
          }
        }
      );
      likes.forEach(like => {
        likeCount[like.PostId] = likeCount[like.PostId] + 1
      });
      console.log(likeCount);
      res.json(likeCount);
    })
      .catch(e => res.end())
  });

  app.get('/api/likes/liked/:id', (req, res) => {
    db.Like.findAll({
      where: {
        UserId: req.params.id
      },
      include: [db.Post]
    }).then(data => res.json(data))
      .catch(e => {
        console.log(e);
        res.status(500)
      })
  })
};

