// This is a karma config file. For more details see
//   https://karma-runner.github.io/1.0/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('../../build/webpack.test.conf');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    client: {
      chai: {
        includeStack: true,
        showDiff: true,
      },
    },
    browsers: ['ChromeHeadless'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    reporters: ['spec', 'coverage'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          '--remote-debugging-port=9222', // Without a remote debugging port, Google Chrome exits immediately.
        ],
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [
          '--safe-mode',
          '--headless',
          '--marionette',
        ],
      },
    },
  });
};
