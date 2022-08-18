const router = require('express').Router();
// Route to postRoutes
const postRoutes = require('./postRoutes')
// Route to userRoutes  
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;