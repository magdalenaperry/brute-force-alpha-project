const {
  Patient
} = require('../models');

const patientData = [
  {
    first_name: "Naomi",
    last_name: "Waugh",
    email: "nwaugh0@oaic.gov.au",
    password: "pJL3NOL0XEw",
    sex: "Female",
    age: 50,
    race: "Japanese",
    street_address: "2891 Waxwing ",
    city: "Charlotte",
    state: "NC",
    zipcode: "28220",
    phone: "(704) 7526617",
    rx: "null",
    dx: "null",
    procedure: "null",
    insurance_name: "null",
    allergies: " null"
  },
  {
    first_name: "Aluino",
    last_name: "Savory",
    email: "asavory1@clickbank.net",
    password: "DEjYnh",
    sex: "Male",
    age: 61,
    race: "Chilean",
    street_address: "4190 Ohio ",
    city: "Greensboro",
    state: "NC",
    zipcode: "27409",
    phone: "(336) 3416973",
    rx: "null",
    dx: "null",
    procedure: "null",
    insurance_name: "null",
    allergies: " null"
  },
  {
    first_name: "Elvyn",
    last_name: "Stannering",
    email: "estannering3@de.vu",
    password: "tc7By8SU",
    sex: "Male",
    age: 25,
    race: "Bangladeshi",
    street_address: "1 Service",
    city: "Greensboro",
    state: "NC",
    zipcode: "27610",
    phone: "(919) 3417478",
    rx: "null",
    dx: "null",
    procedure: "null",
    insurance_name: "null",
    allergies: " null"
  },
  {
    first_name: "Claudelle",
    last_name: "Springham",
    email: "cspringham4@amazon.com",
    password: "6AGY4S",
    sex: "Female",
    age: 95,
    race: "BanglChickasawadeshi",
    street_address: "27907 Summerview",
    city: "Charlotte",
    state: "NC",
    zipcode: "28205",
    phone: "(704) 5489825",
    rx: "Divalproex Sodium",
    dx: "Unspecified sprain of right index finger, initial encounter",
    procedure: "null",
    insurance_name: "null",
    allergies: " null"
  },
  {
    first_name: "Yvette",
    last_name: "Ciciotti",
    email: "yciciotti8@mtv.com",
    password: "cb6kUdEuDqe",
    sex: "Female",
    age: 27,
    race: "Cuban",
    street_address: "99159 Pond",
    city: "Winston Salem",
    state: "NC",
    zipcode: "27150",
    phone: "(336) 7081662",
    rx: "Pentoxifylline",
    dx: "Foreign body in conjunctival sac, left eye, subs encntr",
    procedure: "Fragmentation in Pericardial Cavity, External Approach",
    insurance_name: "null",
    allergies: " null"
  },
  {
    first_name: "Gerard",
    last_name: "Petroselli",
    email: "gpetroselli2@homestead.com",
    password: "JSDDuT3dRRp",
    sex: "Male",
    age: 27,
    race: "American Indian and Alaska Native (AIAN)",
    street_address: " 889 Carey",
    city: "Raleigh",
    state: "NC",
    zipcode: "27605",
    phone: "(919) 5725860",
    rx: "Speed Stick",
    dx: "Scombroid fish poisoning, assault, subsequent encounter",
    procedure: null,
    Insurance: null,
    allergies: null
  },
  {
    first_name: "Maxy",
    last_name: "Franzetti",
    email: "mfranzetti5@baidu.com",
    password: "oU33F4T",
    sex: "Female",
    age: 19,
    race: "Tohono O'Odham",
    street_address: "578 Spenser",
    city: "Raleigh",
    state: "NC",
    zipcode: "27610",
    phone: "(919) 6213119",
    rx: "Venlafaxine Hydrochloride",
    dx: "Strain musc/tend ant grp at low leg level, left leg, subs",
    procedure: null,
    Insurance: null,
    allergies: null
  },
  {
    first_name: "Arnie",
    last_name: "Gillatt",
    email: "agillatt6@businesswire.com",
    password: "mIk27pIC9ZU",
    sex: "Male",
    age: 25,
    race: "Bangladeshi",
    street_address: "91836 Kim",
    city: "Charlotte",
    state: "NC",
    zipcode: "28225",
    phone: "(704) 7566947",
    rx: null,
    dx: null,
    procedure: null,
    Insurance: null,
    allergies: null
  },
  {
    first_name: "Ralph",
    last_name: "Marunchak",
    email: "rmarunchak7@quantcast.com",
    password: "kYL9Wotfe",
    sex: "Male",
    age: 37,
    race: "Melanesian",
    street_address: "9779 Harper",
    city: "Winston Salem",
    state: "NC",
    zipcode: "27116",
    phone: "(336) 2388947",
    rx: "LMX5",
    dx: "Lac w/o fb of left lesser toe(s) w damage to nail, init",
    procedure: null,
    Insurance: null,
    allergies: null
  },
  {
    first_name: "Elia",
    last_name: "Jacquemet",
    email: "ejacquemet9@linkedin.com",
    password: "AeKufsW4AvU",
    sex: "Male",
    age: 1,
    race: "Cherokee",
    street_address: "6790 Maryland",
    city: "Winston Salem",
    state: "NC",
    zipcode: "27105",
    phone: "(704) 8732294",
    rx: null,
    dx: null,
    procedure: null,
    Insurance: null,
    allergies: null
  }
]

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;