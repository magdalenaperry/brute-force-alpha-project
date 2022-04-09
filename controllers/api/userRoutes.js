const router = require('express').Router();
const serialize = require('../../utils/serialize');
const Patient = require('../../models/patient')




// router.post('/', async (req, res) => {
//   try {
//     const userData = await Patient.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });




// PATIENT LOGIN SUCCESSFUL!
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Patient.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    var serializeData = serialize(dbUserData)
    console.log(serializeData)
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = serializeData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// LOGOUT SUCCESSFUL!
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




// CREATE NEW USER SUCCESSFUL!
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await Patient.create(req.body);
    console.log(req.body)

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;
