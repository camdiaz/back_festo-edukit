'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bomb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bomb.init({
    bomb_name: DataTypes.STRING,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bomb',
  });
  return Bomb;
};