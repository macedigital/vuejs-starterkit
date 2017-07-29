const utils = require('./utils');
const config = require('../config');

const isProduction = process.env.NODE_ENV === 'production';

const cssLoaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction,
});

module.exports = {
  loaders: cssLoaders,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
