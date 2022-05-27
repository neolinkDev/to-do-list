const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// const CopyPlugin = require("copy-webpack-plugin");
// const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[hash][ext][query]",
    // assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: "development",
  // resolve: {
  //   extensions: [".js"],
  //   alias: {
  //     '@utils': path.resolve(__dirname, 'src/utils/'),
  //     '@templates': path.resolve(__dirname, 'src/templates/'),
  //     '@styles': path.resolve(__dirname, 'src/styles/'),
  //     '@images': path.resolve(__dirname, 'src/assets/images/'),
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
        // generator: {
        //   publicPath: 'assets/fonts/',
        // },
        // test: /\.(woff|woff2)$/,
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     mimetype: "application/font-woff",
        //     name: "[name].[contenthash].[ext]",
        //     outputPath: "./assets/fonts/",
        //     publicPath: "../assets/fonts/",
        //     esModule: false,
        //   },
        // }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/assets/images/favicon.png",
      'meta': {
        'theme-color': '#1d9bf0'
      },
      inject: true,
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      // filename: 'assets/[name].[contenthash].css'
      filename: "[name].[contenthash].css",
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src", "assets/images"),
    //       to: "assets/images",
    //     },
    //   ],
    // }),
    // new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    //observa los cambios en todos nuestros archivos y actualiza el navegador
    watchFiles: path.join(__dirname, "./**"),
    compress: true,
    historyApiFallback: true,
    port: 9000,
    open: false, // se abre en el navegador automaticamente
  },
};
