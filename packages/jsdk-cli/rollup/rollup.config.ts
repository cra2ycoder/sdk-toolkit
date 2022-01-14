const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const typescript = require('@rollup/plugin-typescript')

/**
 * @description
 * extracting the inputs from process.env
 */
const { fileLocation: input, format, fileName } = process.env

const outputFileLocation = `${input.substring(0, input.lastIndexOf('/'))}`
const outputFileName = `${fileName}.js`

export default {
  input,
  output: {
    file: `${outputFileLocation}/${outputFileName}`,
    format,
  },
  plugins: [nodeResolve(), typescript()],
}
