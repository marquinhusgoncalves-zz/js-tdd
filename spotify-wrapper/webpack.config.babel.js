import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'SpotifyWrapper',
  },
  devtool: 'source_map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include },
    ],
  },
};
