/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    const isProduction = input?.stage === 'production';

    return {
      name: 's-kit',
      removal: isProduction ? 'retain' : 'remove',
      protect: isProduction,
      home: 'aws',
    };
  },

  async run() {
    await import('./infrastructure-sst');
  },
});
