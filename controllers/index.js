const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Render the login.handlebars
router.get((req, res) => {
    res.render('login');
});

module.exports = router;