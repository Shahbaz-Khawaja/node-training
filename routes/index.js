const router = require('express').Router();
const userRoutes = require('./users');
const todoRoutes = require('./todos');

router.use('/users', userRoutes);
router.use('/users', todoRoutes);

module.exports = router;
