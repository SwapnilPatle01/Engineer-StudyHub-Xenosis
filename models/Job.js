const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  requiredSkills: { type: [String], required: true },
  companyName: { type: String, required: true },
  applicationDeadline: { type: Date, required: true },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;