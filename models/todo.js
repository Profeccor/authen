'use strict';
module.exports = (sequelize, DataTypes) => {
  class  Todo extends sequelize.Sequelize.Model {}
  Todo.init({
    userID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING}
  , {sequelize});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};