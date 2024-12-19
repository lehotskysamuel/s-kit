// Example using AWS APIs and permissions
import { EC2 } from 'aws-sdk';
const ec2 = new EC2();
export const handler = async (event, context) => {
    const regions = await ec2.describeRegions().promise();
    const response = {
        describeRegions: regions,
    };
    return {
        statusCode: 200,
        body: JSON.stringify(response, null, 2),
    };
};
