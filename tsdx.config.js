module.exports = {
  rollup(config, options) {
    config.output.file = config.output.file.replace(
      '.cjs.production.min.js.map',
      'xx'
    );
    return config;
  },
};
