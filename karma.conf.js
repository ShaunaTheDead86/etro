// Karma configuration
// Generated on Thu Sep 19 2019 02:05:06 GMT-0400 (Eastern Daylight Time)

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs', 'es6-shim'],

    // list of files / patterns to load in the browser
    files: [
      'dist/etro-iife.js',
      { pattern: 'spec/*.spec.js', included: false },
      { pattern: 'node_modules/resemblejs/*.js', included: false },
      'spec/main.js',
      { pattern: 'spec/assets/**/*', included: false }
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['FirefoxHeadless'],

    customLaunchers: {
      'FirefoxHeadless': {
        base: 'Firefox',
        flags: ['-headless'],
        prefs: {
          'network.proxy.type': 0
        }
      }
    },

    client: {
      captureConsole: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
