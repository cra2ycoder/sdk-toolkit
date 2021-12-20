const { getRollupConfig } = require('../src/prompts')

const compileNow = options => {
  // console.log({ options })
  const value = getRollupConfig(options)
  console.log({ value })
}

module.exports = {
  compileNow,
}
