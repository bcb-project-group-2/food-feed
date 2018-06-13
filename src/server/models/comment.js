module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    post_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Comment.associate = function(models) {
    // We're saying that a Comment should belong to an Author
    // A Comment can't be created without an Author due to the foreign key constraint
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};
