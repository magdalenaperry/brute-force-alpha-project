const router = require('express').Router();
const withAuth = require('../utils/auth');
const {
  User,
  Patient,
  Physician
} = require('../models')

const serialize = require('../utils/serialize')


// homepage
router.get('/', async (req, res) => {
  try {
    // include: [User]

    // const patients = serialize(patientData)
    console.log('hello world')

    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/portal', withAuth, async (req, res) => {
  const patientData = await Patient.findByPk(req.session.user_id);
  console.log('hello')

  const patients = [serialize(patientData)]
  console.log(patients)
  res.render('patient-portal', {
    patients
  })
})

router.get('/form', async (req, res) => {
  res.render('patient-history-form')
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
  // console.log(physicianData);
  const physicians = serialize(physicianData)
  // console.log(physicians);
  res.render('about', {
    physicians
  });
});



router.get('/portal', async (req, res) => {
  res.render('patient-portal');
});

module.exports = router;