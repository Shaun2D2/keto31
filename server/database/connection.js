const AWS = require('aws-sdk');

AWS.config.setPromisesDependency(Promise);

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
});

module.exports = new AWS.DynamoDB.DocumentClient();
