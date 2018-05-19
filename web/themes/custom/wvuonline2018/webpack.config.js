const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: {
      'shout-hello': './components/shout-hello.js'
    },
    output: {
      filename: '[name].bundled.js',
      path: path.resolve(__dirname, 'components'),
    },
    externals: {
      'twig': 'Twig',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
        {
          test: /\.twig$/,
          use: [
            { loader: 'twig-loader' },
          ],
        },
      ],
    },
  },
];
