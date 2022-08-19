const router = require("express").Router();
// Route to postRoutes
const postRoutes = require("./postRoutes");
// Route to userRoutes
const userRoutes = require("./userRoutes");
// Route to draftRoutes
const draftRoutes = require("./draftRoutes");
// Route to commentRoutes
const commentRoutes = require("./commentRoutes");

router.use("/drafts", draftRoutes);
router.use("/user", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
