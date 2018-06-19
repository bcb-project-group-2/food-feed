var db = require("../models");

module.exports = function (app) {
  //return a user entry from a specific id
  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser)
    })
  });

  //get user owned posts
  app.get('/api/users/posts/:id', (req, res) => {
    db.Post.findAll({
      where: {UserId: req.params.id}
    }).then(data => res.json(data))
  });

  //update the user table a new entry
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json({
        id: dbUser.id,
        user_email: dbUser.user_email,
        user_name: dbUser.user_name,
        profile_picture: dbUser.profile_picture,
      })
    });
  });

  //remove an entry from the User table based on a specific id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.end()
    })
  })

  //return a true or false value based on whether an email exists in the database
  app.get("/api/users/check/:email", function (req, res) {
    db.User.findOne({
      where: {
        user_email: req.params.email
      }
    }).then(function (dbUser) {
      if (dbUser === null) {
        res.json(false)
      } else {
        res.json(true)
      }
    })
  })

  //return a true or false value based on whether a match of password and email matched database entry
  app.get("/api/users/login/:email/:password", function (req, res) {
    db.User.findOne({
      where: {
        user_email: req.params.email
      },
    }).then(function (dbUser) {
      try {
        if (dbUser.password === req.params.password) {
          res.json({
            id: dbUser.id,
            user_name: dbUser.user_name,
            user_email: dbUser.user_email,
            profile_picture: dbUser.profile_picture || 'http://www.theamericanconservative.com/wp-content/uploads/2016/10/Clinton-4-554x350.jpg'
          })
        } else {
          res.send(false);
        }
      }
      catch(e) {
        res.json(e);
      }
    })
  })
};
