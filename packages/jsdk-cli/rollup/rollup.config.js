const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

/**
 * @description
 * extracting the inputs from process.env
 */
const { fileLocation: input, format, fileName } = process.env

const outputFileLocation = `${input.substring(0, input.lastIndexOf('/'))}`
const outputFileName = `${fileName}.js`

// console.log({ format })

export default {
  input,
  output: {
    file: `${outputFileLocation}/${outputFileName}`,
    format,
  },
  plugins: [nodeResolve()],
}
