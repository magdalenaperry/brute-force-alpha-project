const router = require('express').Router();
const {
  User,
  Patient
} = require('../models')

const serialize = require('../utils/serialize')


router.get('/', async (req, res) => {
  const patientData = await Patient.findAll({
    // include: [User]
  });

  const patients = serialize(patientData)

  res.render('all', {
    patients
  })
})

module.exports = router;
