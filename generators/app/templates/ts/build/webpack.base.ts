/**
 * Base Webpack configuration, shared between development and production builds.
 * @packageDocumentation
 */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import config from '../config';

const {
  directories: { app: APP_DIR }
} = config;

export default {
  entry: {
    app: [`${APP_DIR}/polyfills.ts`, `${APP_DIR}/index.tsx`]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/,
        include: APP_DIR,
        loader: 'awesome-typescript-loader',
        options: {
          cacheDirectory: true
        }
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
          config.isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.md$/,
        loader: 'babel-loader!react-markdown-loader'
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.scss', '.css', '.md'],
    alias: {
      '@src': APP_DIR,
      '@shared': `${APP_DIR}/components/shared`,
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
