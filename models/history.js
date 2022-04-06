const {
  Reference
} = require('eslint-scope');
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init({
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true

  },
  family_history: {
    type: DataTypes.STRING,
  }

}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'project',
});

module.exports = History;