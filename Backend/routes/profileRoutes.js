const express = require('express');
const { updateProfile } = require('../controllers/profileController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.patch('/update', authenticateJWT, updateProfile);

module.exports = router;
