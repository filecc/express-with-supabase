const express = require('express');
const router = express.Router();
import * as apiController from '../controllers/api';
import errorHandler from '../middlewares/errors';


router.get('/posts', apiController.index)
router.get('/posts/:id', apiController.show)

// Error handling middleware
router.use(errorHandler)


export default router;