// Example using AWS APIs and permissions

import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Context,
  Handler,
} from 'aws-lambda';
import { EC2 } from 'aws-sdk';

const ec2 = new EC2();

export const handler: Handler = async (
  event: APIGatewayProxyEventV2,
  context: Context,
): Promise<APIGatewayProxyResultV2> => {
  const regions = await ec2.describeRegions().promise();

  const response = {
    describeRegions: regions,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response, null, 2),
  };
};
