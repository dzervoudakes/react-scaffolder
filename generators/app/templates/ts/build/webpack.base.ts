/**
 * Base Webpack configuration, shared between development and production builds.
 * @packageDocumentation
 */
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import config from '../config';

const {
  directories: { app: APP_DIR, public: PUBLIC_DIR }
} = config;

const baseConfig: webpack.Configuration = {
  entry: {
    app: [`${APP_DIR}/polyfills.ts`, `${APP_DIR}/index.tsx`]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/,
        include: APP_DIR,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.s?css$/,
        include: APP_DIR,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlPlugin({
      favicon: `${PUBLIC_DIR}/favicon.ico`,
      filename: 'index.html',
      template: `${PUBLIC_DIR}/index.html`,
      minify: process.env.NODE_ENV === 'production' && {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.scss', '.css'],
    alias: {
      '@src': APP_DIR,
      '@shared': `${APP_DIR}/components/shared`
    }
  }
};

export default baseConfig;
