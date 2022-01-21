const path = require('path')
const { run } = require('@xb/node-utils')
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

    /**
     * @todo
     * path - suffering here, this needs to be fixed
     */
    fileLocation: path.resolve(options.inputs),
  }

  if (options.skipPrompt === false) {
    value = {
      ...value,
      ...(await getRollupConfig(options)),
    }
  }

  const isTypescriptConfig = true
  const configPath = `./rollup.config.${isTypescriptConfig ? 'ts' : 'js'}`

  run(`rollup -c ${path.resolve(__dirname, configPath)}`, value)
}

module.exports = {
  compileNow,
}
