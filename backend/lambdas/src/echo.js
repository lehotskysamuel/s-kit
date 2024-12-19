// Basic Example - just returns the event and context as received (filters sensitive stuff), plus some extras for demo purposes
import _ from 'lodash';
export const handler = async (event, context) => {
    console.log('saam', event);
    console.log('saam', context);
    // const demoData: DemoType = {
    //   id: '123456',
    //   createdAt: new Date().toISOString(),
    //   metadata: {
    //     version: '1.0.0',
    //     environment: 'development'
    //   },
    //   data: {
    //     name: 'Demo Object',
    //     description: 'This is a demo object for testing',
    //     tags: ['demo', 'test', 'example'],
    //     settings: {
    //       isEnabled: true,
    //       priority: 1
    //     }
    //   }
    // };
    const response = {
        event: _.cloneDeep(event),
        context: _.cloneDeep(context),
        foo: process.env['FOO'], // example how to use env vars
        // demo: demoData,
    };
    // skip some sensitive stuff
    delete response.event.requestContext.accountId;
    delete response.event.requestContext.requestId;
    delete response.event.headers['x-amzn-trace-id'];
    delete response.context.awsRequestId;
    delete response.context.invokedFunctionArn;
    return {
        statusCode: 200,
        body: JSON.stringify(response, null, 2),
    };
};
