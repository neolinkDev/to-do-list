const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: "[hash][ext][query]",
  },
  mode: "production",
  // resolve: {
  //   extensions: ['.js'],
  //   // alias: {
  //   //   '@utils': path.resolve(__dirname, 'src/utils/'),
  //   //   '@templates': path.resolve(__dirname, 'src/templates/'),
  //   //   '@styles': path.resolve(__dirname, 'src/styles/'),
  //   //   '@images': path.resolve(__dirname, 'src/assets/images/'),
  //   // }
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        type: "asset/resource",
        generator: {
          // publicPath: 'assets/images/',
          outputPath: "assets/images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
                                // [name]
          filename : 'assets/fonts/[hash][ext][query]',
          // publicPath: 'dist/assets/fonts/',
          // outputPath: "assets/fonts/",
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/assets/images/favicon.png", //
      'meta': {                          //
        'theme-color': '#1d9bf0'
      },
      inject: true,
      template: './src/index.html',
      filename: './index.html',
      minify: true
    }),
    new MiniCssExtractPlugin({
      // filename: 'assets/[name].[contenthash].css'
      filename: '[name].[contenthash].css'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src", "assets/images"),
    //       to: "assets/images"
    //     }
    //   ]
    // }),
    // new Dotenv(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(), // Para JS
    ]
  }
}