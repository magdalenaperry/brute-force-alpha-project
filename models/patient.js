const { Reference } = require('eslint-scope');
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  // ,
  // email: {
  //   type: DataTypes.STRING,
  //   validate: {
  //     isEmail: true
  //   }
  // },
  // password: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
  // sex: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
  // age: {
  //   type: DataTypes.INTEGER,
  // },
  // race: {
  //   type: DataTypes.TEXT,
  // },
  // street_address: {
  //   type: DataTypes.TEXT,
  // },
  // city: {
  //   type: DataTypes.TEXT,
  // },
  // state: {
  //   type: DataTypes.TEXT,
  // },
  // zipcode: {
  //   type: DataTypes.INTEGER,
  // },
  // phone: {
  //   type: DataTypes.INTEGER,
  // },
  // rx: {
  //   type: DataTypes.TEXT,
  // },
  // dx: {
  //   type: DataTypes.TEXT,
  // },
  // procedure: {
  //   type: DataTypes.TEXT,
  // },
  // insurance_name: {
  //   type: DataTypes.TEXT
  // },
  // history_id: {
  //   type: DataTypes.TEXT,
  //   references: {
  //     model: 'history',
  //     key: 'id'
  //   }
  // }





  // , 
  // rec_drug: {
  //   type: DataTypes.TEXT,
  //     // references: {
  //     //   model: 'rec_drug',
  //     //   key: ''
  //     // }
  // }, 
  // alcohol_consumption: {
  //   type: DataTypes.TEXT,
  //     // references: {
  //     //   model: 'alcohol_consumption',
  //     //   key: ''
  //     // }
  // }, 
  // tobacco_use: {
  //   type: DataTypes.TEXT,
  //   // references: {
  //   //   model: 'tobacco_use',
  //   //   key: ''
  //   // }
  // },
  // primary_symptoms: {
  //   type: DataTypes.TEXT, 
  //   // references: {
  //   //   model: 'primary_symptoms',
  //   //   id: ''
  //   // }
  // } 
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'patient'
});

module.exports = Patient;