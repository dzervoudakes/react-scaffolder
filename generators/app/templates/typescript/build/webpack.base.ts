/**
 * Base Webpack configuration, shared between development and production builds.
 * @packageDocumentation
 */
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';

const APP_DIR = path.resolve(__dirname, '..', 'src');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const defineStyleRule = (
  options = {}
): (string | { loader: string; options: Record<string, unknown> })[] => [
  process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options },
  'postcss-loader',
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [path.resolve(__dirname, '..', 'node_modules')]
      }
    }
  }
];

const baseConfig: webpack.Configuration = {
  entry: {
    app: [path.resolve(APP_DIR, 'polyfills.ts'), path.resolve(APP_DIR, 'index.tsx')]
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
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: defineStyleRule()
      },
      {
        test: /\.module\.(css|scss)$/,
        use: defineStyleRule({
          url: false,
          localsConvention: 'camelCase',
          importLoaders: 2,
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('images', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('media', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('fonts', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlPlugin({
      favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
      filename: 'index.html',
      template: path.resolve(PUBLIC_DIR, 'index.html'),
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
      '@shared': path.resolve(APP_DIR, 'components', 'shared')
    }
  }
};

export default baseConfig;
