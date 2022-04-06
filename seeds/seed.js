const sequelize = require('../config/connection.js');
const seedPatients = require('./patient-seed');

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

  // await seedComments();
  // console.log('\n----- COMMENTS SEEDED -----\n');

  // await seedPosts();
  // console.log('\n----- POSTS SEEDED -----\n');


  process.exit(0);
};

seedAll();
