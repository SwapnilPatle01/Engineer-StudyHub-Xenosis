const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'company'], required: true },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String }, // Added for email verification
  savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }] // For students to save jobs
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
