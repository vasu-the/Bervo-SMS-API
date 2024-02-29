const SMS = require('../models/smsModel');
const axios = require('axios');

async function sendSMS(phoneNumber) {
    try {
      const message = "Appointment Scheduled Successfully. For more information, check your email or contact us.";
  
      // Make a POST request to Brevo API to send SMS
      const response = await axios.post(
        'https://api.brevo.com/v3/transactionalSMS/sms',
        {
          phone: phoneNumber,
          message: message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SMS_APIKEY}`,
          },
        }
      );
  
      console.log('SMS Sent Successfully');
      return response.data; // Return response data if needed
    } catch (error) {
      console.error('Error sending SMS:', error.message);
      console.error('Error details:', error); // Log the full error object for debugging
      throw new Error('Error sending SMS');
    }
  }
  const sendSMSController = async (req, res) => {
    try {
      const { phoneNumber } = req.body;
  
      // Call sendSMS function
      await sendSMS(process.env.SMS_APIKEY, phoneNumber);
  
      res.send('SMS Sent Successfully');
    } catch (error) {
      console.error('Error sending SMS:', error.message);
      res.status(500).send('Error sending SMS');
    }
  }

module.exports = {
  sendSMSController,
};
