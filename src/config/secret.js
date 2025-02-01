
const dotenv = require("dotenv");
dotenv.config();

const server_port = process.env.SERVER_PORT || 3002;
const Mongo_connect_url = process.env.ATLAS_URL;
const smtpUser = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;


module.exports = {server_port}


