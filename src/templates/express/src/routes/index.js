const router = require('express').Router();
const homeRoutes = require('./home.route');

router.use('/home', homeRoutes);

module.exports = router;
