const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

exports.handler = async event => {
    const params = {
        TableName: "Ninja"
    };

    try {
        const data = await docClient.scan(params).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };

        return response;

    } catch (e) {
        return {
            statusCode: 500
        };
    }
};