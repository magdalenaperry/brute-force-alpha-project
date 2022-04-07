const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Physician extends Model { }

Physician.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  npi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  university: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phys_image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phys_bio: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cal_one: {
    type: DataTypes.TEXT
  },
  cal_two: {
    type: DataTypes.TEXT
  },
  cal_three: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'physician',
});

module.exports = Physician;