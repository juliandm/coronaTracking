const router = require('express').Router();

// split up route handling
router.use('/user', require('./user'));
router.use('/virusInfo', require('./virusInfo'));
router.use('/contactPoint', require('./contactPoint'));
module.exports = router;
