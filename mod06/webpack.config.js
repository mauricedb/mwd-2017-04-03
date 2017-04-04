module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/main.bundle.js'
  },
  module: {
  rules: [
    { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" }
  ]
}
}