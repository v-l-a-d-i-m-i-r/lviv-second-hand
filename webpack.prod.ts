import { merge } from 'webpack-merge';
import common from './webpack.common';
import { Configuration  } from 'webpack';

const webpackConfig = (): Configuration => merge<Configuration>(common(), {
  mode: 'production',
});

export default webpackConfig;
