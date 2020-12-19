import axios from 'axios';

import { ApiClient, TransactionalEmailsApi, SendSmtpEmail } from 'sib-api-v3-sdk';
var defaultClient = ApiClient.instance;


// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';




export async function handler(event, context){

    const parsedBody = JSON.parse(event.body)

    var apiInstance = new TransactionalEmailsApi();

    var sendSmtpEmail = new SendSmtpEmail(
        // {
        //     sender: {name="tester", email: "devbushm@gmail.com"},
        //     to: [parsedBody.content.user.email, ],
        //     templateId: 2,
        // }
    ); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        to: [{
            email: parsedBody.content.user.email,
            name: 'John Doe'
        }],
        templateId: 2,
        params: {
            name: 'John',
            surname: 'Doe'
        },
        headers: {
            'api-key': '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',
            'content-type': 'application/json',
            'accept': 'application/json',
        }
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
    }, function(error) {
    console.error(error);
    });

    axios({
        method: 'post',
        url: 'https://eni6ezxd7c2.x.pipedream.net/',
        data: { email: parsedBody.content.user.email}
    })

    return {
        statusCode: 200,
        body: JSON.stringify({message: "hello world"})
    };
}

