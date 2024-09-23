const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/jobPortal').then(() => console.log('MongoDB connected!')).catch((error) => console.log('MongoDB connection error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const Job = require('./models/Job');

app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving jobs' });
  }
});


app.post('/jobs', async (req, res) => {
    try {
      const newJob = new Job({
        jobTitle: req.body.jobTitle,
        description: req.body.description,
        requiredSkills: req.body.requiredSkills,
        companyName: req.body.companyName,
        applicationDeadline: req.body.applicationDeadline
      });
  
      await newJob.save();
  
      res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
      res.status(500).json({ message: 'Error creating job', error: error.message });
    }
  });