const mongoose = require('mongoose');

const SMSSchema = new mongoose.Schema({
  to: String,
  body: String,
  status: String
}, { timestamps: true });

const SMS = mongoose.model('SMS', SMSSchema);

module.exports = SMS;
