const express = require('express');
const { createJob, getApplicants } = require('../controllers/companyController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/jobs', authenticateJWT, createJob);
router.get('/jobs/:jobId/applicants', authenticateJWT, getApplicants);

module.exports = router;
