const Patient = require('./patient');
const Illness = require('./illness');
const Physician = require('./physician')
const History = require('./history')

// Patient.hasMany(History, {
//   foreignKey: 'history_id',
//   onDelete: 'CASCADE'
// });

Illness.belongsToMany(Patient, {
  through: {
    model: History,
    unique: false
  }
})

Patient.belongsToMany(Illness, {
  through: {
    model: History,
    unique: false
  }
})

// Illness.belongsTo(History, {
//   foreignKey: 'history_id'
// })

History.belongsTo(Patient, {
  foreignKey: 'patient_id'
})

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Patient, History, Physician, Illness };
