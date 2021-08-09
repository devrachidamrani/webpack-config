module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        // You do not have to import React in the js files thanks to this:
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['react-refresh/babel'],
}
