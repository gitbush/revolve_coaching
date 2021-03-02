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

    let sendGridTemplateId;
    let emailSubject;


    if (parsedBody.eventName === 'order.completed'){
        console.log("order completed");

        // if order is for opening workshop
        if(parsedBody.content.items[0].id === '#OC1') {
            sendGridTemplateId = 'd-100795842a1e421892d0cc2879e557ee';
            emailSubject = '2021 Opening Workshop';
        } else if(parsedBody.content.items[0].id === '#WS1'){
            sendGridTemplateId = 'd-b85537e47c084dfa9b094286a2fd2877';
            emailSubject = 'Confidence Collective Workshop';
        }

        // send sendgrid email with content
        // msg template to send to sendGrid
        const msg = {
            to: parsedBody.content.email,
            from: {email: 'mhairi@revolvecoaching.co.uk', name: 'Mhairi Todd'},
            templateId: sendGridTemplateId,
            dynamic_template_data: {
                subject: emailSubject,
                billingAddressName: parsedBody.content.billingAddressName,
                userEmail: parsedBody.content.user.email,
                invoiceNumber: parsedBody.content.invoiceNumber,
                productName: parsedBody.content.items[0].name,
                quantity: parsedBody.content.itemsCount,
                totalPrice: parsedBody.content.total,
                price: parsedBody.content.items[0].price,
                billingAddress1: parsedBody.content.user.billingAddressAddress1,
                billingAddressCity: parsedBody.content.user.billingAddressCity,
                billingAddressPostCode: parsedBody.content.user.billingAddressPostalCode,

            },
        };

        (async () => {
            try {
                await sgMail.send(msg);
                console.log(`To email: ${parsedBody.content.email}`)
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
