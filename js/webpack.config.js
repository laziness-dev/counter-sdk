const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts', 
  output: {
    filename: 'counter.min.js',
    library: 'Counter',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // This will match both .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']  // Add .ts and .tsx as resolvable extensions.
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
