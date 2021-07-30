const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

exports.handler = async event => {
    const params = {
        TableName: "Ninja",
        Key: {
            userId: event.list.userId
        },
        UpdateExpression: "set todo = :nl",
            ExpressionAttributeValues: {
           ":nl": event.list.todo
  },

  ReturnValues: 'ALL_NEW'
    };

   try {
        const data = await docClient.update(params).promise();
        const response = {
            statusCode: 200
        };
        return response;
    } catch (err) {
        return {
            statusCode: 500
        };
    }
};
