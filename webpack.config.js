const path = require('path');

module.exports = {
  mode: 'production', // Set the mode to 'production'
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'build'), // Change output directory to 'build'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling JavaScript
        },
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Interpret @import and url() like import/require()
          'postcss-loader', // Process CSS with PostCSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Apply this rule to image files
        use: [
          {
            loader: 'file-loader', // Use file-loader for handling image files
            options: {
              name: '[name].[hash].[ext]', // Output file naming convention
              outputPath: 'images', // Output directory for images
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], // Resolve these extensions
  },
  devtool: 'source-map', // Generate source maps for easier debugging
};