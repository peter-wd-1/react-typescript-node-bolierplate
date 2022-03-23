// require('ignore-styles').default(['.sass', '.scss', '.svg', '.css'])
require('ignore-styles')
require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
})
require('./server')
