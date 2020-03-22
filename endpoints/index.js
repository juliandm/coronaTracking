const router = require('express').Router();

// split up route handling
router.use('/user', require('./user'));
router.use('/contact', require('./contact'));
router.use('/contactPoint', require('./contactPoint'));
module.exports = router;
