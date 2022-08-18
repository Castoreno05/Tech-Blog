const router = require("express").Router();
// Require Drafts model
const Drafts = require("../../models/Drafts");

// POST route to create the new draft from dashboard
router.post("/", (req, res) => {
  Drafts.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(500).send("Something has went wrong");
    });
});

module.exports = router;
