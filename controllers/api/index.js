const router = require('express').Router();
// Route to postRoutes
const postRoutes = require('./postRoutes')
// Route to userRoutes  
const userRoutes = require('./userRoutes');
// Route to draftRoutes
const draftRoutes = require('./draftRoutes');


router.use('/drafts', draftRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;