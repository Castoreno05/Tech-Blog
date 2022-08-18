const router = require("express").Router();
// Bring in Posts models
const Posts = require("../../models/Posts");

// POST route to create the new posts from dashboard
router.post("/", (req, res) => {
  Posts.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(500).send("Something has went wrong");
    });
});

// Get route to return all the post data
router.get("/", (req, res) => {
  Posts.findAll().then((data) => {
    res.json(data);
  });
});

module.exports = router;
