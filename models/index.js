const Patient = require('./patient');
const History = require('./history');
const Physician = require('./physician')
const User = require('./User')

Patient.hasMany(History, {
  foreignKey: 'history_id',
  onDelete: 'CASCADE'
});

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Patient, History, Physician, User };
