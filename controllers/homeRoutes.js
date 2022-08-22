const router = require("express").Router();
const Drafts = require("../models/Drafts");
const { Posts, Comments } = require("../models");

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

  const allCommentData = await Comments.findAll();
  const comments = allCommentData.map((c) => {
    return c.get({ plain: true });
  });
  const commentsArr = [comments]; // loop and exract post.comments
  console.log(commentsArr);

  res.render("home", { posts: posts, comments: comments });
});

router.get('/home/:id', async (req, res) => {
  try{
    const postData = await Posts.findByPk(req.params.id);
    const posts = postData.get({ plain: true });
    res.render('singlepost', { posts });
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

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
