const mongoose = require('mongoose');

const smsSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SMS = mongoose.model('SMS', smsSchema);

module.exports = SMS;
