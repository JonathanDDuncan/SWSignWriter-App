// webpack.config.js

module.exports = {
   resolve: { fallback: { crypto: "./node_modules/crypto-browserify" } } 
  };