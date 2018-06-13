module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
};
