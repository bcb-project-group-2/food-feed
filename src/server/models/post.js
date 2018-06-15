module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
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
      foreignKey:{
        allowNull: false
      }
    });

    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Post;
};
