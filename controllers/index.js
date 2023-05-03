const router = require('express').Router();

const postRoutes = require('./post');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/posts', postRoutes);

module.exports = router;
