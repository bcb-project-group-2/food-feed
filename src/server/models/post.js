module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    likecount:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{
    "timestamps": false
  });

  Post.associate = function(models) {
    Post.hasMany(models.Comment, {
      onDelete: "cascade"
    });

    // Post.hasMany(models.Like, {
    //   onDelete: "cascade"
    // })

    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Post;
};
