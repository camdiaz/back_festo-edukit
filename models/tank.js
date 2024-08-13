'use strict';
const {
  Model,
  INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tank.init({
    tank_name: DataTypes.STRING,
    capacity:DataTypes.FLOAT,
    level: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Tank',
  });
  return Tank;
};