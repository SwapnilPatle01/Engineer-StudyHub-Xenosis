const Job = require('../models/Job');
const Application = require('../models/Application');
const User = require('../models/User');

// Get available jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('company', 'name');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Apply for a job
exports.applyJob = async (req, res) => {
  const { jobId } = req.body;
  
  try {
    const application = new Application({
      job: jobId,
      student: req.user.id,
    });
    await application.save();
    res.status(201).json({ message: 'Job application submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Save a job for later
exports.saveJob = async (req, res) => {
  const { jobId } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (user.savedJobs.includes(jobId)) {
      return res.status(400).json({ message: 'Job already saved' });
    }
    user.savedJobs.push(jobId);
    await user.save();
    res.status(200).json({ message: 'Job saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get student's saved jobs
exports.getSavedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('savedJobs');
    res.status(200).json(user.savedJobs);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get application history
exports.getApplicationHistory = async (req, res) => {
  try {
    const applications = await Application.find({ student: req.user.id }).populate('job');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
