const router = require('express').Router();
const withAuth = require('../utils/auth');
const {
  Patient,
  Physician
} = require('../models')

const serialize = require('../utils/serialize');
const { default: axios } = require('axios');

router.get('/', async (req, res) => {
  try {
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

  const patients = [serialize(patientData)]
  console.log(patients)
  res.render('patient-portal', {
    loggedIn: req.session.loggedIn,
    patients
  })
})

router.get('/form', async (req, res) => {
  res.render('patient-history-form')
})

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


// SUCCESSFUL!
router.get('/about', async (req, res) => {
  try {
    const { data } = await axios.get("https://api.calendly.com/users/me", {
      headers: {
        Authorization: `Bearer ${process.env['ULBERTOLAURENZI']}`
      }
    })
    console.log(data);
    const physicianData = await Physician.findAll({
    });
    const physicians = serialize(physicianData)
    res.render('about', {
      loggedIn: req.session.loggedIn,
      physicians
    });
  }
  catch (err) {
    console.log(err);
    res.json(err)
  }

});

module.exports = router;