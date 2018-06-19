module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_picture: {
      type: DataTypes.TEXT,
    },
  },{
    "timestamps": false
  });


  User.associate = function (models) {
    User.hasMany(models.Relationship, {
      onDelete: "cascade"
    });

    User.hasMany(models.Post, {
      onDelete: "cascade"
    });

    User.hasMany(models.Comment, {
      onDelete: "cascade"
    });

    // User.hasMany(models.Like, {
    //   onDelete: "cascade"
    // })
  };


  return User;
};
