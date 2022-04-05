const router = require('express').Router();
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>CHECK ROUTE!!!</h1>")
});

module.exports = router;