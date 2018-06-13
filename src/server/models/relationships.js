module.exports = function(sequelize, DataTypes) {
  var Relationship = sequelize.define("Relationship", {
    following_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Relationship.associate = function(models) {
    Relationship.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Relationship;
};
