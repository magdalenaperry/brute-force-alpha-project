const router = require('express').Router();
const {
  User,
  Patient,
  Physician
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

// router for /login page and renders 'login.handlebars', will send you to home once logged in! 
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


// SUCCESSFUL!
router.get('/about', async (req, res) => {
  const physicianData = await Physician.findAll({
    // include: [User]
  });
  console.log(physicianData);
  const physicians = serialize(physicianData)
  console.log(physicians)
  res.render('about', {
    physicians
  });
});



router.get('/portal', async (req, res) => {
  res.render('patient-portal');
});

module.exports = router;