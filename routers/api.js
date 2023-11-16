const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');
const errors = require('../middlewares/errors');


router.get('/posts', apiController.index)
router.get('/posts/:id', apiController.show)

// Error handling middleware
router.use(errors)


module.exports = router;