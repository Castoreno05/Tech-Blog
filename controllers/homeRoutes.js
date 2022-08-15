const router = require('express').Router();

// Render the login.handlebars
router.get("/", (req, res) => {
    res.render('login');
});

router.get("/sign-up", (req, res) => {
    res.render('sign-up');
})

router.get('/home', (req, res) => {
    res.render("home");
});

router.get('/dashboard', (req, res) => {
    res.render("dashboard");
});

module.exports = router;