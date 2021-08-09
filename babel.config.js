const plugins = []

if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel')
}

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
  plugins: plugins,
}
