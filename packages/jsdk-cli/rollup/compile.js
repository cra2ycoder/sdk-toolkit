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

  if (isTypescriptConfig === true) {
    /**
     * for ts configuration
     */
    run(
      `rollup -c ${path.resolve(
        __dirname,
        './rollup.config.ts'
      )} --configPlugin typescript`,
      value
    )
  } else {
    /**
     * @note
     * for js configuration
     */
    run(`rollup -c ${path.resolve(__dirname, './rollup.config.js')}`, value)
  }

  // runRollup(, value)
}

module.exports = {
  compileNow,
}
