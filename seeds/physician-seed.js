const {
  Physician
} = require('../models');

const physicianData = [{
  first_name: "Louis",
  last_name: "MacCafferty",
  email: "lmaccafferty0@chiron.com",
  npi: "1308248202",
  specialty: "Pediatrics",
  university: "Wake Forest Medical School",
  phys_image: "https://gravatar.com/avatar/58106c1697dfa2733ebc928825a58631?s=400&d=robohash&r=x",
  phys_bio: "Dr. Louis MacCaffery has his Doctor of Osteopathic Medicine from Wake Forest Medical School. He has been practicing medicine for the past 18 years and has a passion for giving the best care possible to your children to make sure they are happy and healthy. For any additional questions or to schedule an appointment with Dr. MacCaffery please visit the link below.",
  cal_three: "https://calendly.com/louismaccafferty?hide_landing_page_details=1&hide_gdpr_banner=1"
}, {
  first_name: "Helena",
  last_name: "Lempke",
  email: "hlempke1@chiron.com",
  npi: "9189423704",
  specialty: "Orthopedics",
  university: "Baylor Medical School",
  phys_image: "https://gravatar.com/avatar/8c6301964bdb5a01dd420bf8f5be51d8?s=400&d=robohash&r=x",
  phys_bio: "Dr. Helena Lempke attended Baylor Medical School to become a orthopedic surgeon. After 35 years in orthopedics Dr. Lempke has come to work for Chiron to offer her services here. She has a wonderful success rate with over 300 successful surgeries and counting. For any additional questions or to schedule an appointment with Dr. Lempke please visit the link below.",
  cal_three: "https://calendly.com/helenalempke?hide_landing_page_details=1&hide_gdpr_banner=1"

}, {
  first_name: "Ulberto",
  last_name: "Laurenzi",
  email: "ulaurenzi2@chiron.com",
  npi: "9361906135",
  specialty: "Radiology",
  university: "Chicago Medical School",
  phys_image: "https://gravatar.com/avatar/9b83e7e5128203430c08a5e087b3b059?s=400&d=robohash&r=x",
  phys_bio: "Dr. Ulberto Laurenzi is a Doctor of Medicine obtaining his degree through the Chicago Medical School. He has been practicing the radiology for the last 48 years and is nearing his retirment in the fall. Dr. Laurenzi in addition has been board certified by the American Board of Radiology. For any additional questions or to schedule an appointment with Dr. Laurenzi please visit the link below.",
  cal_three: "https://calendly.com/ulbertolaurenzi?hide_landing_page_details=1&hide_gdpr_banner=1"

}, {
  first_name: "Ludwig",
  last_name: "Halsworth",
  email: "lhalsworth3@chiron.com",
  npi: "6221196493",
  specialty: "Cardiology",
  university: "Boston University School of Medicine",
  phys_image: "https://gravatar.com/avatar/0a6ff3f0d1ceccf014f4ffc0cb3aff8d?s=400&d=robohash&r=x",
  phys_bio: "Dr. Ludwig Halsworth is a cardiologist having got his doctorate at Boston University School of Medicine. He is one of the newer doctors at Chiron but is a welcome addition to the team. In his free time he enjoys riding motorcycles. He can often be seen discussing riding with patients after checkups. For any additional questions or to schedule an appointment with Dr. Halsworth please visit the link below.",
  cal_three: "https://calendly.com/ludwighalsworth?hide_landing_page_details=1&hide_gdpr_banner=1"

}, {
  first_name: "Merola",
  last_name: "O'Shee",
  email: "moshee4@chiron.com",
  npi: "7456511799",
  specialty: "OBGYN",
  university: "Morehouse School of Medicine",
  phys_image: "https://gravatar.com/avatar/5dc571ad6259f7c0a21ba30d13d5555f?s=400&d=robohash&r=x",
  phys_bio: "Dr. Merola O'Shee is an OBGYN studying at Morehouse School of Medicine. She has been a practing OBGYN for the last 8 years. She is known as the office cat lady. Dr. O'Shee can always be seen showing her patients pictures of her cat. It brings her patients the greatest joy after a difficult appointment to see how cute her cats are. For any additional questions or to schedule an appointment with Dr. O'Shee please visit the link below.",
  cal_three: "https://calendly.com/mreolaoshee?hide_landing_page_details=1&hide_gdpr_banner=1"

},
{
  first_name: "Nancy",
  last_name: "Perry",
  email: "nperry4@chiron.com",
  npi: "7456511799",
  specialty: "Family Medicine",
  university: "Eastern Virginia Medical School",
  phys_image: "https://gravatar.com/avatar/a83b087c4d1b21adfbcd285b552f428a?s=400&d=robohash&r=x",
  phys_bio: "Dr. Nancy Perry practices Family Medicine here at Chiron. She got her doctorate at Eastern Virginia Medical School. She has been practicing family medicine for 26 years and is beloved by all her patients. When she's not giving the best care possible here at Chiron. She is a part time bartender on the weekends. She enjoys the social experience. For any additional information or to schedule an appointment with Dr. Perry please visit the link below.",
  cal_three: "https://calendly.com/nancyperrymd?hide_landing_page_details=1&hide_gdpr_banner=1"

}
]

const seedPhysicians = () => Physician.bulkCreate(physicianData);

module.exports = seedPhysicians;