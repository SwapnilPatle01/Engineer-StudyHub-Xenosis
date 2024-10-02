const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
