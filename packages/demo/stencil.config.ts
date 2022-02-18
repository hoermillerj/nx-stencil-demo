import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'demo',
  taskQueue: 'async',
  sourceMap: true,
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/packages/demo/dist',
    },
    {
      type: 'www',
      dir: '../../dist/packages/demo/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
