const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = (options) => {
  const opts = Object.assign({}, options);

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: opts.sourceMap,
    },
  };

  // generate loader string to be used with extract text plugin
  const generateLoaders = (loader, loaderOptions) => {
    const loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: opts.sourceMap,
        }),
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (opts.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
      });
    }
    return ['vue-style-loader'].concat(loaders);
  };

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', { strictMath: true, strictUnits: true }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = (options) => {
  const output = [];
  const loaders = exports.cssLoaders(options);
  Object.keys(loaders).forEach((extension) => {
    const loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader,
    });
  });

  return output;
};

/**
 * Rewrite paths in `manifest.json` files
 * @link https://developer.mozilla.org/en-US/docs/Web/Manifest
 * @param {Buffer} content
 * @param {String} filepath
 * @returns {Buffer}
 */
exports.updateManifest = (content, filepath) => {
  if (!filepath.match(/manifest\.json$/)) {
    return content;
  }

  const routePrefix = JSON.parse(config.build.env.ROUTER_PREFIX);
  const assetPrefix = config.build.assetsPublicPath;
  const addRoutePrefix = (route, prefix) => path.normalize(`${route.replace(/^\//, `${prefix}/`)}`);
  const iconPrefix = icon => addRoutePrefix(icon.src, assetPrefix);
  const json = JSON.parse(content);

  json.start_url = addRoutePrefix(json.start_url, routePrefix);
  json.scope = path.normalize(`${routePrefix}/`);
  json.icons = json.icons.map(icon => Object.assign(icon, { src: iconPrefix(icon) }));

  return Buffer.from(JSON.stringify(json), 'utf-8');
};
