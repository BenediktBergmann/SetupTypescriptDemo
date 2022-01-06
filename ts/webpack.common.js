const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    demo: './src/code/demo.ts'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: 'maps/[name].js.map',
    path: path.resolve(__dirname, '../Webresources/js'),
    library: ['bebe', '[name]'],
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({fix: true, extensions: ['ts', 'tsx'], lintDirtyModulesOnly: true, failOnError: true}),
  ],
  resolve: {
    extensions: ['.ts', '.js' ],
  }
};