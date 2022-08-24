const router = require("express").Router();
const req = require("express/lib/request");
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
  })
    .catch((err) => {
      res.sendStatus(500).send("Not connected").json(err)
    })
});

// Get route to return One draft per id 
router.get("/:id", (req, res) => {
  Drafts.findOne(
    {
      where: {
        id: req.params.id
      },
    }
  ).then((draftData) => {
    res.json(draftData);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err);
  }) 
});

// Delete route for draft data
router.delete('/:id', (req, res) => {
  // delete draft based on its id selected
  Drafts.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedDraft) => {
      res.json(deletedDraft)
    })
    .catch((err) => res.json(err))
});

// Update route for draft data
router.put('/:id', (req, res) => {
  Drafts.update(
    {
      // All data attached to the request body.
      title: req.body.title,
      content: req.body.content,
    },
    {
      // Gets the draft based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedDraft) => {
      // Sends updated draft as a json response
      res.json(updatedDraft);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
