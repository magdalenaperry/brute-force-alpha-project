const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Illness extends Model { }

Illness.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true
  },
  has_cancer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_asthma: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_cardiac_arrest: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_diabetes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_hypertension: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_psyciatric_disorder: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_epilepsy: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'project',
});

module.exports = Illness;