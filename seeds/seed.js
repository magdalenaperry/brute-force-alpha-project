const sequelize = require('../config/connection.js');
const seedPatients = require('./patient-seed');
const seedPhysicians = require('./physician-seed');

// const seedPatients = require('./patient-seed');
// const seedPosts = require('./post-seed');
// const seedUsername = require('./username-seed');


const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPatients();
  console.log('\n----- PATIENTS SEEDED -----\n');

  await seedPhysicians();
  console.log('\n----- Physician SEEDED -----\n');

  // await seedPosts();
  // console.log('\n----- POSTS SEEDED -----\n');


  process.exit(0);
};

seedAll();
