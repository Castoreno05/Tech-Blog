const router = require("express").Router();
// Require Drafts model
const Drafts = require("../../models/Drafts");

// POST route to create the new draft from dashboard
router.post("/", (req, res) => {
  Drafts.create({
    title: req.body.title,
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

// Get route to return all the draft data
router.get("/", (req, res) => {
  Drafts.findAll().then((data) => {
    res.json(data);
  });
});

module.exports = router;
