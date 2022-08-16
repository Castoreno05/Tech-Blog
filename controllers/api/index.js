const router = require('express').Router();
// Route to postRoutes
const postRoutes = require('./postRoutes')

router.use('/posts', postRoutes);

module.exports = router;