import { FunctionArgs } from '../.sst/platform/src/components/aws';

export function lambdaFunction(name: string, options: FunctionArgs) {
  return new sst.aws.Function(name, {
    architecture: 'arm64',
    runtime: 'nodejs22.x',
    // TODO Saam - tags should take stage and project from sst
    tags: {
      tagName: 'tagValue',
    },
    ...options,
  });
}

const isProduction = $app.stage === 'production';
console.log('saam', isProduction);

export const echoFn = lambdaFunction('EchoFn', {
  handler: './backend/lambdas/src/echo.handler',
  environment: {
    FOO: isProduction ? 'bar-prod' : 'bar-dev',
  },
});

export const awsTestFn = lambdaFunction('AwsPermissionsTestFn', {
  handler: './backend/lambdas/src/aws-test.handler',
  permissions: [
    {
      actions: ['ec2:DescribeRegions'],
      resources: ['*'],
    },
  ],
});

export const api = new sst.aws.ApiGatewayV2('ApiGw2', {
  cors: {
    allowHeaders: ['Authorization', 'Content-Type'],
    allowMethods: ['*'],
    allowOrigins: ['http://localhost:3000'],
  },
});
api.route('GET /echo', echoFn.arn);
api.route('GET /aws', awsTestFn.arn);
