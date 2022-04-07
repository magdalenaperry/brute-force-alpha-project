const { Reference } = require('eslint-scope');
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

const history = require('./history')
const drugs = require('./drugs')
const symptoms = require('./symptoms')

class Patient extends Model { }

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
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  race: {
    type: DataTypes.STRING,
  },
  street_address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  zipcode: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.STRING,
  },
  rx: {
    type: DataTypes.STRING,
  },
  dx: {
    type: DataTypes.STRING,
  },
  procedure: {
    type: DataTypes.STRING,
  },
  insurance_name: {
    type: DataTypes.STRING
  },
  allergies: {
    type: DataTypes.STRING
  },
  illness: {
    type: DataTypes.STRING
  },
  history: {
    type: DataTypes.STRING
  }

  // ,
  // history_id: {
  //   type: DataTypes.TEXT,
  //   references: {
  //     model: 'history',
  //     key: 'id'
  //   }
  // },
  // rec_drug: {
  //   type: DataTypes.TEXT,
  //   references: {
  //     model: 'drugs',
  //     key: 'id'
  //   }
  // },
  // primary_symptoms: {
  //   type: DataTypes.TEXT,
  //   references: {
  //     model: 'symptoms',
  //     key: 'id',
  //   }
  // }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'patient'
});

module.exports = Patient;