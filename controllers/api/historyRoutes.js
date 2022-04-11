const router = require('express').Router();
const { Illness } = require('../../models');

router.post('/forms', async (req, res) => {
  try {
    const historyData = await Illness.create({

      has_cancer: req.body.has_cancer,
      has_asthma: req.body.has_asthma,
      has_cardiac_disease: req.body.has_cardiac_disease,
      has_diabetes: req.body.has_diabetes,
      has_hypertension: req.body.has_hypertension,
      has_psychiatric_disorder: req.body.has_psychiatric_disorder,
      has_epilepsy: req.body.has_epilepsy

    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(historyData);
      console.log('yay')
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
