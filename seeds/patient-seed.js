const {
  Patient
} = require('../models');

const patientData = [{
    first_name: "Caleb",
    last_name: "Hoyle"
  },
  {
    first_name: "David",
    last_name: "Aylward"
  },
  {
    first_name: "Jasmin",
    last_name: "Bouasavatdy"
  }
]

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;