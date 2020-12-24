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
        from: 'mhairi@revolvecoaching.co.uk',
        templateId: 'd-eee87bdcff2741f6bbf78388b0ded934',
        dynamicTemplateData: {
          subject: '2021 Opening Workshop',
          name: parsedBody.content.billingAddressName,
        },
    };
    
    if (parsedBody.eventName === 'order.completed') {
        (async () => {
            try {
                await sgMail.send(msg);
                console.log(parsedBody.content.email)
            } catch (error) {
                console.error(error);
            
                if (error.response) {
                console.error(error.response.body.errors)
                }
            }
        })();
    } else {
        console.log(parsedBody.eventName)
    }
        

}
