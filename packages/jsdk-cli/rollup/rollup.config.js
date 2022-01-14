const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

/**
 * @description
 * extracting the inputs from process.env
 */
const { fileLocation: input, type: format, bundleName } = process.env

const outputFileLocation = `${input.substring(0, input.lastIndexOf('/'))}`
const outputFileName = `${bundleName}.js`

export default {
  input,
  output: {
    file: `${outputFileLocation}/${outputFileName}`
    format,
  },
  plugins: [nodeResolve()],
}
