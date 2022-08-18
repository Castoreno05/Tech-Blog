const router = require("express").Router();
const Posts = require("../models/Posts");

// Render login.handlebars
router.get("/", (req, res) => {
  res.render("login");
});

// Render sign-up.handlebars
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

// Render home.handlebars
// router.get('/home', (req, res) => {
//     res.render("home");
// });

// Get route to return all the post data then render home.handlebars
router.get("/home", async (req, res) => {
  const allPostData = await Posts.findAll();
  const posts = allPostData.map((p) => {
    return p.get({ plain: true });
  });
  res.render("home", { posts: posts });
});

// Render dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
