const {
  Reference
} = require('eslint-scope');
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Physician extends Model {}

Physician.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  }, 
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  }, 
  last_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  }, 
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  }, 
  npi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
  specialty: {
    type: DataTypes.TEXT,
    allowNull: false,
  }, 
  university: {
    type: DataTypes.TEXT, 
    allowNull: false,
  }, 
  phys_image: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'physician',
});

module.exports = Physician;