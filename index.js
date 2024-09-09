// Import the AWS SDK
const AWS = require('aws-sdk'); 

// Configure AWS SDK with your region
AWS.config.update({
    accessKeyId: '---',
    secretAccessKey: '---',
  region: 'us-east-1', // Replace with your desired region,
  logger: console // Enable logging

});

// Create an SNS service object
const sns = new AWS.SNS();

// Define the SMS parameters
const params = {
  Message: 'Hello, Happy Birthday ', // Your message content
  PhoneNumber: '+89111111111', // Replace with the recipient's phone number in E.164 format
};

// Send the SMS
sns.publish(params, (err, data) => {
  if (err) {
    console.error('Error sending SMS', err);
  } else {
    console.log('SMS sent successfully', data);
  }
});
