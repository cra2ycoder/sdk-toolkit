const { runRollup } = require('@xb/node-utils')
const { getRollupConfig, getFileName } = require('../src/prompts')

// console.log(require('@xb/node-utils'))

const compileNow = options => {
  // console.log({ options })
  let value = {
    type: 'iife',
    fileName: getFileName(options.inputs),
  }

  if (options.skipPrompt === false) {
    value = getRollupConfig(options)
  }

  console.log(runRollup)

  // runRollup('./rollup.config.js', {})

  console.log({ value })
}

module.exports = {
  compileNow,
}
