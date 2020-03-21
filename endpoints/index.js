const router = require('express').Router();

// split up route handling
router.use('/user', require('./user'));
router.use('/virusInfo', require('./virusInfo'));

module.exports = router;
