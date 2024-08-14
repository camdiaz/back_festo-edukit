'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sensor.init({
    sensor_name: DataTypes.STRING,
    level: DataTypes.FLOAT,
    unity: DataTypes.STRING,
    type: DataTypes.STRING,
    min: DataTypes.FLOAT,
    max: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Sensor',
  });
  return Sensor;
};