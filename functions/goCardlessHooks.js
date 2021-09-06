const process = require("process");
const webhooks = require("gocardless-nodejs/webhooks");

const webhookEndpointSecret = process.env.WEBHOOK_ENDPOINT_SECRET;

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