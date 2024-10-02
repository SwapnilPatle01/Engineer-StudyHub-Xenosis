const Job = require('../models/Job');
const Application = require('../models/Application');

// Create a job post
exports.createJob = async (req, res) => {
  const { title, description } = req.body;

  try {
    const job = new Job({
      title,
      description,
      company: req.user.id,
    });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Review applicants
exports.getApplicants = async (req, res) => {
  const { jobId } = req.params;

  try {
    const applications = await Application.find({ job: jobId }).populate('student', 'name email');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
