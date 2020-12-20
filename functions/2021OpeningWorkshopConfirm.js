// sendgrid email
const sgMail = require('@sendgrid/mail'); // bring in sendgrid module
require('dotenv').config();
sgMail.setApiKey(process.env.sendgrid_api_key); // set api key



// Lambda function to run when POST is sent from snipcart 
// Parses data in to this function
exports.handler = function(event, context){
    
    // JSON format data from snipcart
    const parsedBody = JSON.parse(event.body)
    // console.log(parsedBody.content.email)
    // build msg to send to sendgrid
    const msg = {
        to: parsedBody.content.email,
        from: 'devbushm@gmail.com',
        templateId: 'd-f9762fb3d88a47928554a334dc2a8641',
        dynamicTemplateData: {
          subject: 'Testing Templates',
          name: parsedBody.content.billingAddressName,
        },
    };
    
    if (parsedBody.eventName === 'order.completed') {
        (async () => {
            try {
                await sgMail.send(msg);
            } catch (error) {
                console.error(error);
            
                if (error.response) {
                console.error(error.response.body.errors)
                }
            }
        })();
    }
        

}
