const twilio = require('twilio')
const accountSid = 'my_acc_sid'; 
const authToken = 'my_auth_token'; 
// const phoneNumber = process.env.TWILIO_PHONE_NUMBER

var client = new twilio(accountSid, authToken); 

client.messages.create({
   from: '+twilio_number', 
   to: '+phone_number', 
   body: 'You successfully sold / bought stocks! '
})
.then((message) => console.log(message.sid));
