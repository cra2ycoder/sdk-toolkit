const path = require('path')
const { runRollup } = require('@xb/node-utils')
const { getRollupConfig, getFileName } = require('../src/prompts')

const compileNow = async options => {
  /**
   * @description
   * default configuration
   */
  let value = {
    format: 'iife',
    compressionType: 'gzip',
    fileName: getFileName(options.inputs),
    fileLocation: path.resolve('../../', options.inputs),
  }

  if (options.skipPrompt === false) {
    value = {
      ...value,
      ...(await getRollupConfig(options)),
    }
  }

  runRollup(path.resolve(__dirname, './rollup.config.js'), value)
}

module.exports = {
  compileNow,
}
