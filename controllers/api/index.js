const router = require('express').Router();
const dashboard = require('./user')

router.use('/dashboard', dashboard);

module.exports = router;