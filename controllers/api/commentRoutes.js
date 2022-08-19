const { Comments } = require("../../models");
const router = require("express").Router();

// POST route to create the new comments from home page
router.post("/", (req, res) => {
  Comments.create({
    post_id: req.body.post_id,
    content: req.body.content,
    user_id: req.session.user_id,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(500).send("Something has went wrong");
    });
});

// Get route to return all comment data
router.get("/", (req, res) => {
  Comments.findAll().then((data) => {
    res.json(data);
  });
});

module.exports = router;
