const router = require("express").Router();
const Drafts = require("../models/Drafts");
const Posts = require("../models/Posts");


// -----------------------------------------------------------------------------------------
// Render login.handlebars
router.get("/", (req, res) => {
  res.render("login");
});


// -----------------------------------------------------------------------------------------
// Render sign-up.handlebars
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});


// -----------------------------------------------------------------------------------------
// Render home.handlebars
// Get route to return all the post data then render home.handlebars
router.get("/home", async (req, res) => {
  const allPostData = await Posts.findAll();
  const posts = allPostData.map((p) => {
    return p.get({ plain: true });
  });
  res.render("home", { posts: posts });
});

// router.get('/home', (req, res) => {
//     res.render("home");
// });

// -----------------------------------------------------------------------------------------
// Render dashboard
router.get("/dashboard", async (req, res) => {
  const allDraftData = await Drafts.findAll();
  const drafts = allDraftData.map((d) => {
    return d.get({ plain: true });
  });
  res.render("dashboard", { drafts: drafts });
});

module.exports = router;
