const express = require('express');
const { getJobs, applyJob, saveJob, getSavedJobs, getApplicationHistory } = require('../controllers/studentController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/jobs', authenticateJWT, getJobs);
router.post('/jobs/apply', authenticateJWT, applyJob);
router.post('/jobs/save', authenticateJWT, saveJob);
router.get('/jobs/saved', authenticateJWT, getSavedJobs);
router.get('/applications/history', authenticateJWT, getApplicationHistory);

module.exports = router;
