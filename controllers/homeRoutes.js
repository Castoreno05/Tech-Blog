const router = require('express').Router();

// Render login.handlebars
router.get("/", (req, res) => {
    res.render('login');
});

// Render sign-up.handlebars 
router.get("/sign-up", (req, res) => {
    res.render('sign-up');
})

// Render home.handlebars
router.get('/home', (req, res) => {
    res.render("home");
});

// Render dashboard
router.get('/dashboard', (req, res) => {
    res.render("dashboard");
});

module.exports = router;