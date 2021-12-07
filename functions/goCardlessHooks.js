const gocardless = require("gocardless-nodejs");
require('dotenv').config();
const constants = require("gocardless-nodejs/constants");
const process = require("process");
const webhooks = require("gocardless-nodejs/webhooks");

const client = gocardless(
  // We recommend storing your access token in an environment
  // variable for security
  // console.log(process.env.GOCARDLESS_TEST_KEY),
  // process.env.GOCARDLESS_TEST_KEY,
  'sandbox_t8TWNTHA4lq9JCNG31_SCSNm-6v0t5ztOnw3d9Ld',
  
  // Change this to constants.Environments.Live when you're ready to go live
  constants.Environments.Sandbox
);

const listResponse = client.customers.list();
listResponse.then(function(result) {
  const customers = result.customers
  console.log(customers) // "Some User token"
})

const webhookEndpointSecret = '0HbuhhSaLgzsOPmKYs35tczowIqFw8v-4zcm2ghk';

// Handle the incoming Webhook and check its signature.
const parseEvents = (
  eventsRequestBody,
  signatureHeader // From webhook header
) => {
  try {
    return webhooks.parse(
      eventsRequestBody,
      webhookEndpointSecret,
      signatureHeader
    );
  } catch (error) {
    if (error instanceof webhooks.InvalidSignatureError) {
      console.log("invalid signature, look out!");
    }
  }
};