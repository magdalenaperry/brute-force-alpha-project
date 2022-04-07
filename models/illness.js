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
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  has_asthma: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  has_cardiac_disease: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  has_diabetes: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  has_hypertension: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  has_psychiatric_disorder: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  has_epilepsy: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'illness',
});

module.exports = Illness;