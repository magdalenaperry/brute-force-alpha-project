const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);

module.exports = router;
