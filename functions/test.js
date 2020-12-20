// sendgrid email
const sgMail = require('@sendgrid/mail'); // bring in sendgrid module
require('dotenv').config();
sgMail.setApiKey(process.env.sendgrid_api_key); // set api key



// Lambda function to run when POST is sent from snipcart 
// Parses data in to this function
exports.handler = function(event, context){
    
    // JSON format data from snipcart
    const parsedBody = JSON.parse(event.body)

    // build msg to send to sendgrid
    const msg = {
        to: parsedBody.content.user.email,
        from: 'devbushm@gmail.com',
        templateId: 'd-f9762fb3d88a47928554a334dc2a8641',
        dynamicTemplateData: {
          subject: 'Testing Templates',
          name: parsedBody.content.user.billingAddressName,
        },
    };
    
    let expression = parsedBody.eventName
    switch (expression) {
        case ('order.completed') :
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
            break
    }
}


// axios({
//     method: 'post',
//     url: 'https://eni6ezxd7c2.x.pipedream.net/',
//     data: { email: parsedBody.content.user.email}
// })

// sgMail
    //     .send(msg)
    //     .then(() => {}, error => {
    //         console.error(error);

    //         if (error.response) {
    //         console.error(error.response.body)
    //         }
    //     });




