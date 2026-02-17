const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.argv.some((arg) => arg.includes('production'));

const ROOT_DIR = __dirname;
const buildType = process.env.BUILD_TYPE || 'umd';
const buildTarget = process.env.BUILD_TARGET || 'app';

const plugins = [new CleanWebpackPlugin()];

if (buildTarget == 'app') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      title: 'noteit',
      rootUrl: '/',
    }),
  );
}

module.exports = {
  plugins,
  entry:
    buildTarget === 'package'
      ? './src/package/index.ts'
      : ['./src/app/index.ts'],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(
      ROOT_DIR,
      buildTarget === 'package'
        ? buildType === 'umd'
          ? '/dist'
          : '/package'
        : '/docs',
    ),
    filename: 'bundle.js',
    libraryTarget: buildType,
    publicPath: isProduction ? './' : '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
