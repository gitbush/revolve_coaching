// Bring in and then export env variables set in .env
// In template us {{ <file_name>.<env_name> }}

module.exports = {
    environment: process.env.ENVIRONMENT,
    sendgrid_api_key: process.env.SENDGRID_API_KEY
  };