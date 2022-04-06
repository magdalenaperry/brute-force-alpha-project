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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/portal', (req, res) => {
  res.render('patient-portal');
});

module.exports = router;
