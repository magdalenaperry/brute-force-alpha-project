const sequelize = require('../config/connection.js');
const seedPatients = require('./patient-seed');
const seedPhysicians = require('./physician-seed');

const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPatients();
  console.log('\n----- PATIENTS SEEDED -----\n');

  await seedPhysicians();
  console.log('\n----- Physician SEEDED -----\n');

  process.exit(0);
};

seedAll();
