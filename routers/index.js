const express = require('express');
const router = express.Router();
const { sendSMSController } = require('../controllers/smsController');

// Define route for sending SMS
router.post('/send-sms', sendSMSController);

module.exports = router;
