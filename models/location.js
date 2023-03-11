const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Location extends Model {}

Location.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    building: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    floor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rack_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Location',
  }
);

module.exports = Location;