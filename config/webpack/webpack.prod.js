const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const CURRENT_WORKING_DIR = process.cwd();
console.log("current working dir ", CURRENT_WORKING_DIR)
const NODE_ENV = process.env.NODE_ENV;
console.log("node_env ", NODE_ENV)
const BASE_API_URL = process.env.BASE_API_URL;
console.log("base api uri ", BASE_API_URL)
const JWT_SECRET = process.env.JWT_SECRET;
console.log("jwt secret ", JWT_SECRET)
const PORT = process.env.PORT;
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY;
const MAILCHIMP = process.env.MAILCHIMP;
const MAILCHIMP_LIST_KEY = process.env.MAILCHIMP_LIST_KEY;
const MAILGUN_KEY = process.env.MAILGUN_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_EMAIL_SENDER = process.env.MAILGUN_EMAIL_SENDER;
const BASE_API_URI = process.env.BASE_API_URI;
const MONGO_URI = process.env.MONGO_URI;
// #google
// GOOGLE_CLIENT_ID= 745617023572-k0g51h0e3k3apa6q6e6ioitnrsckgtsp.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET= ZQAqILemVNieQS6sSCE0fHYW
// GOOGLE_CALLBACK_URL=auth/google/callback

// #facebook
// FACEBOOK_CLIENT_ID= 2663612287222769
// FACEBOOK_SECRET= 75bc70f56fc24232f8196c451782b4b5
// FACEBOOK_CALLBACK_URL=auth/facebook/callback

// #jwt
// JWT_SECRET = 6cf00fdf52e3c20c6b1f253643736912

// #site urls
// BASE_CLIENT_URL=https://localhost:3000
// # CLIENT_URL_PROD=https://foodlogin.herokuapp.com/
// BASE_SERVER_URL=https://localhost:5000
// # SERVER_URL_PROD=https://foodlogin.herokuapp.com/

// #img folder path
// IMAGES_FOLDER_PATH=/public/images/
// require('dotenv').config();
module.exports = {
  mode: 'production',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('cssnano'), require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              publicPath: '../images',
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              publicPath: '../fonts',
              name: '[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        BASE_API_URL: JSON.stringify(BASE_API_URL),
        JWT_SECRET: JSON.stringify(JWT_SECRET),
        MAILGUN_KEY: JSON.stringify(MAILCHIMP_KEY),
        MAILCHIMP: JSON.stringify(MAILCHIMP),
        MAILCHIMP_KEY: JSON.stringify(MAILCHIMP_KEY),
        MAILCHIMP_LIST_KEY: JSON.stringify(MAILCHIMP_LIST_KEY),
        MAILGUN_KEY: JSON.stringify(MAILCHIMP_LIST_KEY),
        MAILGUN_KEY: JSON.stringify(MAILGUN_KEY),
        MAILGUN_DOMAIN: JSON.stringify(MAILGUN_DOMAIN),
        MAILGUN_EMAIL_SENDER: JSON.stringify(MAILGUN_EMAIL_SENDER),
// const MAILGUN_EMAIL_SENDER = process.env.MAILGUN_EMAIL_SENDER;
// const MAILGUN_EMAIL_SENDER = process.env.MAILGUN_EMAIL_SENDER;
// const BASE_API_URI = process.env.BASE_API_URI;
        PORT: PORT
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(CURRENT_WORKING_DIR, 'client/public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new WebpackPwaManifest({
      name: 'MERN Store',
      short_name: 'MERNStore',
      description: 'MERN Store!',
      background_color: '#fff',
      theme_color: '#4a68aa',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('client/public/images/pwa.png'),
          destination: 'images',
          sizes: [72, 96, 128, 144, 192, 384, 512]
        },
        {
          src: path.resolve('client/public/images/pwa.png'),
          sizes: [120, 152, 167, 180],
          destination: 'images',
          ios: true
        }
      ]
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ]
};
