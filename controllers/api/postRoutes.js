const router = require('express').Router();
// Bring in Posts models
const Posts = require('../../models/Posts');

// POST route to create the new posts from dashboard
router.post("/posts", (req, res) => {
    Posts.create({
        title: req.body.title,
        content: req.body.content
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) =>{
        res.json(err);
    });
});

// Get route to return all the post data
router.get("/", (req, res) => {
    Posts.findAll().then(data => {
        res.json(data)
    });
});


module.exports = router;