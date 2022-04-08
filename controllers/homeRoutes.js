const router = require('express').Router();
const withAuth = require('../utils/auth');
const {
  Patient,
  Physician
} = require('../models')

<<<<<<< HEAD
const serialize = require('../utils/serialize')


=======
const serialize = require('../utils/serialize');
const { default: axios } = require('axios');
>>>>>>> main
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
    loggedIn: req.session.loggedIn,
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
<<<<<<< HEAD
  const physicianData = await Physician.findAll({
    // include: [User]
  });
  // console.log(physicianData);
  const physicians = serialize(physicianData)
  // console.log(physicians);
  res.render('about', {
    physicians
  });
=======
  try {
    const { data } = await axios.get("https://api.calendly.com/users/me", {
      headers: {
        Authorization: `Bearer ${process.env['ULBERTOLAURENZI']}`
      }
    })
    console.log(data);
    const physicianData = await Physician.findAll({
      // include: [User]
    });
    // console.log(physicianData);
    const physicians = serialize(physicianData)
    // console.log(physicians)
    res.render('about', {
      loggedIn: req.session.loggedIn,
      physicians
    });
  }
  catch (err) {
    console.log(err);
    res.json(err)
  }

>>>>>>> main
});



router.get('/portal', async (req, res) => {
  res.render('patient-portal');
});

module.exports = router;