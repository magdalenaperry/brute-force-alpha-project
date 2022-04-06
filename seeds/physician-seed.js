const {
  Physician
} = require('../models');

const physicianData = [{
      first_name: "Louis",
      last_name: "MacCafferty",
      email: "lmaccafferty0@yahoo.com",
      gender: "Male",
      npi: 1308248202,
      specialty: "Pediatrics",
      university: "Wake Forest Medical School", 
      phys_image: "https://gravatar.com/avatar/58106c1697dfa2733ebc928825a58631?s=400&d=robohash&r=x"
    }, {
      first_name: "Helena",
      last_name: "Lempke",
      email: "hlempke1@unc.edu",
      gender: "Female",
      npi: 9189423704,
      specialty: "Orthopedics",
      university: "Baylor Medical School", 
      phys_image: "https://gravatar.com/avatar/a83b087c4d1b21adfbcd285b552f428a?s=400&d=robohash&r=x"
    }, {
      first_name: "Ulberto",
      last_name: "Laurenzi",
      email: "ulaurenzi2@reverbnation.com",
      gender: "Male",
      npi: 9361906135,
      specialty: "Radiology",
      university: "Chicago Medical School", 
      phys_image: "https://gravatar.com/avatar/9b83e7e5128203430c08a5e087b3b059?s=400&d=robohash&r=x"
    }, {
      first_name: "Ludwig",
      last_name: "Halsworth",
      email: "lhalsworth3@technorati.com",
      gender: "Male",
      npi: 6221196493,
      specialty: "Cardiology",
      university: "Boston University School of Medicine", 
      phys_image: "https://gravatar.com/avatar/0a6ff3f0d1ceccf014f4ffc0cb3aff8d?s=400&d=robohash&r=x"

    }, {
      first_name: "Merola",
      last_name: "O'Shee",
      email: "moshee4@virginia.edu",
      gender: "Female",
      npi: 7456511799,
      specialty: "OBGYN",
      university: "Morehouse School of Medicine", 
      phys_image: "https://gravatar.com/avatar/5dc571ad6259f7c0a21ba30d13d5555f?s=400&d=robohash&r=x"
    },
    {
      first_name: "Nancy",
      last_name: "Perry",
      email: "nperry4@virginia.edu",
      gender: "Female",
      npi: 7456511799,
      specialty: "Family Medicine",
      university: "Eastern Virginia Medical School", 
      phys_image: "https://gravatar.com/avatar/8c6301964bdb5a01dd420bf8f5be51d8?s=400&d=robohash&r=x"
    }
  ]

const seedPhysicians = () => Physician.bulkCreate(physicianData);

module.exports = seedPhysicians;